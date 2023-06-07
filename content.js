// ページ読み込み完了時のイベントハンドラ
function onPageLoad() {
  // サーバーに保存するデータを取得
  const url = window.location.href;

  // リクエストデータを作成
  const requestData = {
    url: url
  };

  // サーバーにデータを送信
  fetch('https://silentbouncydecimal.yustar114514.repl.co/save', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  })
    .then(response => {
      if (response.ok) {
        console.log('データをサーバーに送信しました');
      } else {
        console.error('サーバーへの送信に失敗しました');
      }
    })
    .catch(error => {
      console.error('通信エラー:', error);
    });
}

// ページ読み込み完了時に実行されるイベントリスナーを登録
window.addEventListener('load', onPageLoad);
