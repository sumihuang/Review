    // 判断arr是否为一个数组，返回一个bool值
    function isArray(arr) {
      return Object.prototype.toString.call(arr) === '[object Array]';
      // return arr instanceof Array
      // return  Array.prototype.isPrototypeOf(arr)
      // return Object.getPrototypeOf(arr)=Array.prototype
      // return Array.isArray(arr);
    }

    // 判断fn是否为一个函数，返回一个bool值
    function isFunction(fn) {
      return Object.prototype.toString.call(fn) === '[object Function]';
      // return  Function.prototype.isPrototypeOf(fn);
      // return  Object.getPrototypeOf(fn)==Function.prototype;
      // return  fn instanceof Function
    }
