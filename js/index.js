window.onload = function () {
  let timer = null;
  let box = document.getElementById('box')
  let ul = document.getElementById('oul')
  let boxW = box.offsetWidth
  let num = 0

// 指示器
  let cursor = document.getElementById('cursor')
  let lis = cursor.children
  for (var i = 0; i < lis.length; i++) {
    let li = lis[i]
    li.onclick = function () {
      //清空所有
      for (var i = 0; i < lis.length; i++) {
        lis[i].className = ''
      }
      // 设置当前
      this.className = 'active'
    }
  }

  // 轮播图
  autoplay()
  box.onmouseover = function () {
    clearInterval(timer)
  }
  box.onmouseout = function () {
    autoplay()
  }

  function autoplay() {
    clearInterval(timer)
    timer = setInterval(function () {
      num++;
      if (num > 6) {
        num = 1
      }
      ul.style.left = -boxW * num + 'px'
    }, 1000)
  }




}