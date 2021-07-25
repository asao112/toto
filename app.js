`use strict`
document.addEventListener('DOMContentLoaded', function() {
    // 必要なDOM要素を取得。
          const addTaskTrigger = document.getElementsByClassName('addTask-trigger')[0];
          const addTaskTarget = document.getElementsByClassName('addTask-target')[0];
          const addTaskValue = document.getElementsByClassName('addTask-value')[0];  
          //ID用のインデックスを定義
    let nextId = 0;
    const addTask = (task,id) => {
        // 表のタグを生成する
        const tableItem = document.createElement('tr');
        const addButtonTd = document.createElement('td');
        const addButton = document.createElement('button');
        const removeButtonTd = document.createElement('td');
        const removeButton = document.createElement('button');
        // それぞれ作業中、削除という言葉をボタンに入れる
        addButton.innerText = '作業中';
        removeButton.innerText = '削除';
        //ここで削除機能をつけたい。。次回の課題
        /*
        removeButton.addEventListener('click', () => {  
        });
        */
        // IDを表示するspan要素を作成して tableItem に追加
        const idSpan = document.createElement('span');
        idSpan.innerText = id;
        const idSpanTd = document.createElement('td');
        idSpanTd.append(idSpan);
        const taskSpan = document.createElement('span');
        const taskSpanTd = document.createElement('td');
        taskSpan.innerText = task;
        taskSpanTd.append(taskSpan);
    
        addButtonTd.append(addButton);
        removeButtonTd.append(removeButton);
    
        tableItem.append(idSpanTd);
        tableItem.append(taskSpanTd);
        tableItem.append(addButtonTd);
        tableItem.append(removeButtonTd);
    
         //入力タスクを表示
         addTaskTarget.appendChild(tableItem);
    };
    
    // 追加ボタンに対して、タスク登録イベントを設定
    addTaskTrigger.addEventListener('click', () => {
        const task = addTaskValue.value;
        addTask(task,nextId ++);
        addTaskValue.value = '';
    });
    });