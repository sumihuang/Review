
    // 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
    // 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
    function cloneObject(src) {
      var clone = src;

      // 对于Date,String,Boolean等引用类型的数据，需要考虑调用构造函数重新构造，直接赋值依然会有引用问题（不是真正的clone引用变量）
      // 对于 Date
      if (src instanceof Date) {
        clone = new Date(src.getDate());
        return clone;
      }

      // 对于Object和Array的遍历，可以使用for in，这样可以保证在在Array对象上扩展的属性也可以正确复制
      // 对于 数组
      if (src instanceof Array) {
        clone = [];
        for (var key in src) {
          clone[key] = cloneObject(src[key]);
        }
        return clone;
      }

      // 对于 Object
      if (src instanceof Object) {
        clone = {};
        for (var key in src) {
          if (src.hasOwnProperty(key)) {       // 忽略掉继承属性
            clone[key] = cloneObject(src[key]);
          }
        }
        return clone;
      }

      // 对于 数字 字符串 布尔 null undefined
      return src;
    }

    // 测试用例：

     var srcObj = {
     a: 1,
     b: {
     b1: ["hello", "hi"],
     b2: "JavaScript"
     }
     };
     var abObj = srcObj;
     var tarObj = cloneObject(srcObj);

     srcObj.a = 2;
     srcObj.b.b1[0] = "Hello";

     console.log(abObj.a);
     console.log(abObj.b.b1[0]);

     console.log(tarObj.a);      // 1
     console.log(tarObj.b.b1[0]);    // "hello"
