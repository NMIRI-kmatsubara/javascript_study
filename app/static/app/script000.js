var msg ="hello world2";
      //window.alert(msg);

      let name = '鈴木';
      let str = `こんにちは、${name}さん。
      今日もいい天気ですね。`;
      console.log(str);

      var data = ['Javascript', 'A', 'B', 'C'] 
      console.log(data[0])

      var obj = {x:1, y:2, z:3};
      console.log(obj.x);
      console.log(obj['y']);

      var x = 5;
      if (x>10){
        console.log('変数xは10以上です');
      }else{
        console.log('変数xは10未満です')
      }

      for (var x=8; x<10; x++){
        console.log('xの値は'+ x);
      }

      var str2 = 'こんにちは！';
      console.log(str2.length);

      with(console) {
        log(Math.abs(-100));
        log(Math.max(4, 59, 92));
      }

      var ary = ['佐藤', '岡部','吉島']

      function getTriangle(base, height){
        return base * height / 2;
      }

      console.log('三角形の面積：' + getTriangle(5,2))

      var getTriangle2 = new Function('base', 'height', 'return base * height /2;');
      console.log('三角形の面積：' + getTriangle2(10,3));

      let getTriangle3 = (base, height) => base * height /2;
      console.log('三角形の面積3：' + getTriangle2(12,3));

      let getCircle = raduis =>raduis * raduis * Math.PI;
      console.log('円の面積3：' + getCircle(12));

      function showMessage(value){
        if (arguments.length !==1){
          throw new Error('引数の数が間違っていいます：' + arguments.length );
        }
        console.log(value);
      }
      try {
        showMessage('山田');
      }catch(e) {
        window.alert(e.message)
      }