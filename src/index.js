import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し，初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内のテキストを取得
    let text = addTarget.innerText;
    const textLength = text.length;
    text = text.slice(0, textLength - 4);

    //押された完了ボタンの親タグ(li)を未完了リストから削除
    const deleteTarget = completeButton.parentNode;
    deleteFromIncompleteList(deleteTarget);

    //li以下を初期化
    addTarget.textContent = null;

    addTarget.innerText = text;

    //button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(li)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      let text = backButton.parentNode.innerText;
      const textLength = text.length;
      text = text.slice(0, textLength - 2);
      createIncompleteList(text);
    });
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
  li.appendChild(completeButton);

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });
  li.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
