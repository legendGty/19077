function render(el) {
    let perarr = JSON.parse(localStorage.getItem('per'))
    let person2 = perarr.map(v =>
        `
                    <tr>
                    <td>${v.id}</td>
                    <td>${v.username}</td>
                    <td>${v.phonenum}</td>
                    <td>${v.qqnum}</td>
                    <td>${v.major}</td>
                    <td>${v.gtime}</td>
                    <td>
                        <button type="button" uid=${v.id} class="btn btn-default btn-warning del">删除</button>
                        <a class="btn btn-success editmsg" data-toggle="modal" uid=${v.id} href='#modal-id'>修改</a>
                    </tr>
                `)
    $(el).html(person2.join(""))

    // $(".content tr").on("click",function(){
    //     console.log(111)
    //     $(this).css({"background":"#f00"}).siblings().css({"background":"#fff"})
    // })
}

function del(sel) {
    $(sel).click(function () {
        let r = confirm('确定要删除吗？')
        if (r == true) {
            let id = $(this).attr('uid')
            let personalarr = JSON.parse(localStorage.getItem('per'))
            console.log(personalarr)
            let perobjarr = personalarr.filter(v => v.id != id)
            localStorage.setItem('per', JSON.stringify(perobjarr))
            $(this).parent().parent().remove()
        }
        
    })
}

function search(sel) {
    $(sel).click(function () {
        console.log(2222)
        let message = $('.search_name').val()
        let personalarr = JSON.parse(localStorage.getItem('per'))
        console.log(personalarr)
        // let perobj = personalarr.find(v => v.username == message || v.phonenum == message)
        let perobj = personalarr.filter(v => v.username == message || v.phonenum == message)
        console.log(perobj)
        // let str=""
        // let perphone=personalarr.find(v => v.phonenum == message)
        if (perobj) {
            let str=perobj.map(v=>
               `
                   <tr>
                    <td>${v.id}</td>
                    <td>${v.username}</td>
                    <td>${v.phonenum}</td>
                    <td>${v.qqnum}</td>
                    <td>${v.major}</td>
                    <td>${v.gtime}</td>
                    <td>
                        <button type="button" uid=${v.id} class="btn btn-default btn-warning del">删除</button>
                        <a class="btn btn-success editmsg editmsg" data-toggle="modal" uid=${v.id} href='#modal-id'>修改</a>
                        </td>
                    </tr>
                   
                `)

            // str += `
            //        <tr>
            //         <td>${perobj.id}</td>
            //         <td>${perobj.username}</td>
            //         <td>${perobj.phonenum}</td>
            //         <td>${perobj.qqnum}</td>
            //         <td>${perobj.major}</td>
            //         <td>${perobj.gtime}</td>
            //         <td>
            //             <button type="button" uid=${perobj.id} class="btn btn-default btn-warning del">删除</button>
            //             <a class="btn btn-success editmsg editmsg" data-toggle="modal" uid=${perobj.id} href='#modal-id'>修改</a>
            //             </td>
            //         </tr>
            //        `
            $(".content").html(str.join(""))
            del(".del")
            edit(".editmsg", ".saveidt")
        } else {
            alert('该用户不存在！')
            return false;
        }
    })

}

function edit(sel, el) {
    $(sel).click(function () {
        $(this).parent().parent().css({"background":"#f00"}).siblings().css({"background":"#fff"})

        let id = $(this).attr('uid')
        console.log(id)
        let personalarr = JSON.parse(localStorage.getItem('per'))
        // console.log(personalarr)
        let perobj = personalarr.find(v => v.id == id)
        console.log(perobj)

        $('.ename').val(perobj.username)
        $('.ephonenum').val(perobj.phonenum)
        $('.eqqnum').val(perobj.qqnum)
        $('.emajor').val(perobj.major)
        $('.egtime').val(perobj.gtime)
        $(el).attr('uid', perobj.id)
        let obj = {
            cname: ".ename",
            cph: ".ephonenum",
            cqq: ".eqqnum",
            ctime: ".egtime"
        }
        let spanobj = {
            sname: ".epoint_na",
            sph: ".epoint_ph",
            sqq: ".epoint_qq",
            stime: ".epoint_time"
        }
        check(obj, spanobj)
        $(el).click(function () {
            // if (phe == 1 && nam == 1 && qq == 1 && time == 1) {
            let eobj = {}
            let id = $(this).attr('uid')
            let personalarr = JSON.parse(localStorage.getItem('per'))
            console.log(personalarr)
            let perobjindex = personalarr.findIndex(v => v.id == id)
            // console.log(perobjindex)
            eobj.username = $('.ename').val()
            eobj.phonenum = $('.ephonenum').val()
            eobj.qqnum = $('.eqqnum').val()
            eobj.major = $('.emajor').val()
            eobj.gtime = $('.egtime').val()

            eobj.id = perobjindex + 1
            // console.log(eobj)
            personalarr.splice(perobjindex, 1, eobj)
            // console.log(personalarr)
            localStorage.setItem('per', JSON.stringify(personalarr))
            // location.reload()
            console.log($(this).index())
            $(".content tr").eq(eobj.id).css({"background":"#f00"}).siblings().css({"background":"#fff"})
            location.reload()
            $(".content tr").eq(eobj.id).css({"background":"#f00"}).siblings().css({"background":"#fff"})
        })
    })

}