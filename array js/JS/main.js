
const btn = document.querySelector('#btn')
const title = document.querySelector('#title')
const comment = document.querySelector('#comment')
const time = document.querySelector('#time')


let box = document.querySelector('#box')


let listTodo = []

let count = 0
btn.onclick = () => {
    let obj = {
        title: title.value,
        comment: comment.value,
        time: time.value,
        id: count
    }
    let block = document.createElement('div')
    block.classList.add('block')
    block.innerHTML = `
        <h2>title: ${title.value}</h2>
                <p> Comment: ${comment.value}</p>
                <p>Time:${time.value} </p>
                <div class="btnBox">
                    <button>change</button>
                    <button>delite</button>
                </div>

    `
    listTodo.push(obj)
    box.append(block)
    count += 1
    console.log(listTodo);


    for (let i of listTodo) {
        if (obj.title.value == '' || obj.comment.value == '' || objtime.value == '') {
            console.log('Bo‘sh maydon bor!');
        }
        else {
            alert('correect')
        }
    }
}