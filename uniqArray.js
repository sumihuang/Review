
    // 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
    //第一种方法，遍历，将没有的插入临时数组
    function uniqArray1(arr) {
      var n=[];
      for(var i=0;i<arr.length;i++){
        //如果当前项已经保存到了临时数组，则跳过，否则加入
        if(n.indexOf(arr[i])==-1){
          n.push(arr[i]);
        }
      }
      return n;
    }
    //第二种方法，使用哈希表
    function uniqArray2(arr){
      var n={},//哈希表
        r=[];//零时数组
      for(var i=0;i<arr.length;i++){
        if(n[arr[i]]==null){//如果哈希表中没有，则添加到哈希表，且进入临时数组
          n[arr[i]]=true;
          r.push(arr[i]);
        }
      }
      return r;
    }

    //第三种方法，先排序，再比较邻接部分
    function uniqArray3(arr){
      arr.sort();
      var r=[arr[0]];
      for(var i=1;i<arr.length;i++){
        if(arr[i]!=r[r.length-1]){//由于已经经过了排序，所以相邻的是相同的
          r.push(arr[i]);
        }
      }
      return r;
    }
