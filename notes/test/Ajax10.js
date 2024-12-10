const creator = '老张'
//外号，获取对应数据
function getBookList(){
    axios({
        url:'http://hmajax.itheima.net/api/books',
        params:{
            creator:creator
        }
    }).then(result=>{
        console.log(result);
        const booklist= result.data.data
        console.log(booklist);
        const htmlStr=booklist.map((item,index)=>{
            return `<tr>
            <td>${index+1}{</td>
            <td>${item.bookname}</td>
            <td>${item.author}</td>
            <td>${item.publisher}</td>
            <td>
            <span class="del">删除</span>
            <span class="edit">编辑</span>
            </td>
            </tr>
            `
        }).join('')
        document.querySelector('.list').innerHTML=htmlStr;
    })
}
getBookList();