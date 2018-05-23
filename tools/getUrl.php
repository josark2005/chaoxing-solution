<!DOCTYPE html>
<html lang="zh-cn" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>超星网课数据计算</title>
  </head>
  <body>

    <h1>超星网课数据收集器</h1>

    请在下方输入已经格式化的信息以便抓取，不要输入多余数据

    <form action="./getUrl.php" method="post">
      <textarea name="i" style="width:100%;" rows=14></textarea>
      <button type="submit">提交</button>
    </form>

    <hr />

    <footer>
      <span>仅可用于超星网课数据收集</span><br />
      <span>这真xx是个xx，前端写的一塌糊涂，xx！</span>
    </footer>
  </body>
</html>

<?php
  if (!isset($_POST['i'])) {
    exit();
  }
  $info = $_POST['i'];
  $info_psd = array();
  $info = explode(PHP_EOL, $info);
  $pattern = "/^(.+):[\s]*(.+)$/";
  for ($i=0; $i < count($info); $i++) {
    $stat = preg_match($pattern, $info[$i], $match);
    if( $stat != 0 ){
      $info_psd[$match[1]] = $match[2];
    }
  }
  $clazzId = $info_psd['clazzId'];
  $userid = $info_psd['userid'];
  $jobid = $info_psd['jobid'];
  $objectId = $info_psd['objectId'];
  $duration = $info_psd['duration'];
  $duration1000 = $info_psd['duration']*1000;
  $clipTime = "0_".$info_psd['duration'];
  $enc = "[$clazzId][$userid][$jobid][$objectId][$duration1000][d_yHJ!\$pdA~5][$duration1000][$clipTime]";
  echo $enc . "<br />";
  $enc =  md5("[$clazzId][$userid][$jobid][$objectId][$duration1000][d_yHJ!\$pdA~5][$duration1000][$clipTime]");
  // $enc =  md5("[$clazzId][$userid][$jobid][$objectId][$duration1000][d_yHJ!\$pdA~5][$duration1000][$clipTime]");
  echo $enc;
?>
