[ patapata Ver1.02 - README.txt ]

*** このプログラムについて ***
・このプログラムはウェブページ上で「反転フラップ式案内表示機(以下、ぱたぱたとする)」風の表示をできるようにするものです。
・製作者はSoybeanman(TwitterID : @Soybeanman504)です。
---

*** 利用条件 ***
・ライセンスはMIT Licenseです。
    ・大体の内容を以下に示します。
    作成者や著作権者は、製品に対しての義務や責任を何ら負わないこと
    著作権の表示を保持すること

・利用条件について不明な点がある場合には、製作者(TwitterID : @Soybeanman504)へのダイレクトメッセージで受け付けます。
・もし、他の方に紹介していただける場合にはGithubのURL( https://github.com/Soybeanman504/patapata )も一緒に紹介していただけるとありがたいです。
---

*** ファイルとディレクトリ一覧 ***
・patapata.js
・patapata.css
    上記の2ファイルは実際に使う際に必要なものです。

・README.txt
    このテキストファイルです。不明なことがあればまずこれを参照してください。
・sample
    ・index.html
    ・index.js
    ・index.css
        実際に使用した例です。
        sampleは使用する上で不要なので消してもらって構いません。
---

*** HTML内への設置方法 ***
[1] patapata.jsとpatapata.cssをわかりやすい場所に置きます。
[2] 使用するページのHTMLの<head>内からpatapata.jsとpatapata.cssを読み込みます。
[3] ぱたぱたを設置したい場所に以下のソースを置きます。
        <div class="patapata"></div>
    ・data-text属性で表示するテキストを指定できます。
    ・大きさを変更する際はstyle属性のwidth,heightで指定できます。
    ・フォントサイズの変更はできません。
    ・デフォルトではテキスト無しで、大きさは120px*50px(縦*横)です。
[4] 完了です。
    ・この状態ではアニメーションは発生しません。
        なんらかのJSファイルからPatapataクラスにある関数を使用して設定してください。
        関数の詳細は次項「収録されているクラスと関数」で解説します。
---

*** 収録されているクラスと関数 ***
・全てpatapata.jsに収録されています。

[クラス一覧]
・Patapataクラス
    ・これを使用してアニメーションを指定します。
    ・収録されている唯一のクラスです。

[関数]
・Patapata.change(parent, text, milliTime, frequency)
    ・アニメーションして表示テキストを変更します。
    ・parent : 対象とするぱたぱたの<div class="patapata">要素オブジェクト
    ・text : 変更後のテキスト
        ・初期値 ' '
    ・milliTime : アニメーション時間
        ・ミリ秒で指定します。
        ・初期値 500
    ・frequency : ぱたぱたする回数
        ・初期値 5
    ・呼び出し直後にアニメーションします。

・Patapata.set(parent)
    ・指定された<div class="patapata">要素に対してDOM操作を行います。
    ・parent : 対象とするぱたぱたの<div class="patapata">要素オブジェクト
    ・動的に<div class="patapata">要素を追加した場合にはこの関数を実行するとPatapata.changeを使用できるようになります。

・Patapata.setAll()
    ・内容が空の<div class="patapata">要素全てに対してDOM操作を行います。
    ・これを実行することでPatapata.changeを使用できるようになります。
    ・patapata.js上でDOMツリーの構築終了後に呼び出されているのでわざわざ使用する必要はないです。
---

*** バージョン ***
1.00 : 初版
1.01 : ライセンスをGNU General Public License (GPL)からMIT Licenseに変更
1.02 : 一部のブラウザで表示が崩れるバグを改善
