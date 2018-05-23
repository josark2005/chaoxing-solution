<!DOCTYPE html>
<html lang="zh-cn" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>超星网课数据收集</title>
  </head>
  <body>

    <h1>超星网课数据收集器</h1>

    请在下方输入已经格式化的信息以便抓取，不要输入多余数据

    <form action="./getInfo.php" method="post">
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
  $array = array(
    "userid",
    "enc",
  );
  $info_psd = array();
  $info = explode(PHP_EOL, $info);
  $pattern = "/^(.+):[\s]*(.+)$/";
  for ($i=0; $i < count($info); $i++) {
    $stat = preg_match($pattern, $info[$i], $match);
    if( $stat != 0 ){
      if ( !in_array($match[1], $array) ){
        $info_psd[$match[1]] = $match[2];
      }
    }
  }
  file_put_contents("./i.db", json_encode($info_psd).PHP_EOL, FILE_APPEND);
?>
