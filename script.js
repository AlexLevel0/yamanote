$(function() {

  const stations = [
    "東京", "神田", "秋葉原", "御徒町", "上野", "鶯谷",
    "日暮里", "西日暮里", "田端", "駒込", "巣鴨", "大塚",
    "池袋", "目白", "高田馬場", "新大久保", "新宿", "代々木",
    "原宿", "渋谷", "恵比寿", "目黒", "五反田", "大崎",
    "品川", "高輪ゲートウェイ", "田町", "浜松町", "新橋", "有楽町"
  ];

  const $container = $('#circle-container');
  const centerX = $container.width() / 2;
  const centerY = $container.height() / 2;
  const radius = 250;
  const labelOffset = 100;
  const labelRadius = radius + labelOffset;

  stations.forEach((name, idx) => {
    const angle = - (idx / stations.length) * (Math.PI * 2)
                  - Math.PI / 2
                  + (3 * Math.PI / 5);
    const x = centerX + Math.cos(angle) * labelRadius;
    const y = centerY + Math.sin(angle) * labelRadius;

    if (name === "高輪ゲートウェイ") {
      $('<div>')
        .addClass('station multiline')
        .html("高輪<br>ゲートウェイ")
        .css({ left: x + 'px', top: y + 'px' })
        .appendTo($container);
    } else {
      $('<div>')
        .addClass('station')
        .text(name)
        .css({ left: x + 'px', top: y + 'px' })
        .appendTo($container);
    }
  });

  // クリック時に中央テキストを置き換える
  $('.station').on('click', function() {
    // 改行を除去して駅名だけ取り出す
    const raw = $(this).html();
    const stationName = raw.replace(/<br>/g, '') || $(this).text();
    $('.center-text').text(stationName);
  });
});
