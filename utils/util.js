const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}


 function daoJiShi(that,countnum){
   
   if(countnum===0){
      that.setData({
       dajishi:''
      })
     return
   }
    setTimeout((countnum) => {

      countnum--;
      that.setData({
         dajishi:countnum
      })
      daoJiShi(that,countnum)
    }, 1000);  
  }

module.exports = {
  formatTime,
  daoJiShi
}
