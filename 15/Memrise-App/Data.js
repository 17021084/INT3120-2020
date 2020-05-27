const listWordData= [
    { id:1 , word:'ありがとうございます' , hira: 'ありがとうございます' ,mean:'Cảm ơn ' , miss:false , level:1 },
    { id:2 , word:'車' , hira: 'くるま' ,mean:'Xe hơi' , miss:false , level:1  },
    { id:3 , word:'野菜' , hira: 'やさい' ,mean:'Rau' , miss:true , level:1  },
    { id:4 , word:'指輪' , hira: 'ゆびわ' ,mean:'Nhẫn' , miss:true , level:3  },
    { id:5 , word:'鍋' , hira: 'なべ' ,mean:'Nồi' , miss:false , level:3 },
    { id:6 , word:'果物' , hira: 'くだもの' ,mean:'Hoa quả' , miss:true , level:4 },
    { id:7 , word:'ミカン' , hira: 'みかん' ,mean:'Quả quýt' , miss:false , level:5 },  
    { id:8 , word:'家' , hira: 'いえ' ,mean:'Nhà' , miss:false , level:1 }, 
    { id:9 , word:'病院' , hira: 'びょういん' ,mean:'Bệnh viện' , miss:false , level:1 },
    { id:10 , word:'漢字' , hira: 'かんじ' ,mean:'Hán tự' , miss:false , level:5 },
    { id:11 , word:'家庭' , hira: 'かてい' ,mean:'Gia đình' , miss:false , level:1 },
    { id:12 , word:'経済' , hira: 'けいざい' ,mean:'kinh tế' , miss:false , level:4 },
    { id:13 , word:'庭' , hira: 'にわ' ,mean:'Vườn' , miss:false , level:4 },
    { id:14 , word:'大学' , hira: 'だいがく' ,mean:'Đại học' , miss:false , level:1 },
    { id:15 , word:'研究者' , hira: 'けんきゅうしゃ' ,mean:'Nhà nghiên cứu' , miss:false , level:1 },
    { id:16 , word:'電気' , hira: 'でんき' ,mean:'Điện, đèn điện' , miss:false , level:1 },
    { id:17 , word:'私' , hira: 'わたし' ,mean:'Tôi' , miss:false , level:1 },
    { id:18 , word:'皆さん' , hira: 'みなさん' ,mean:'Mọi người' , miss:false , level:1 },
    { id:19 , word:'先生' , hira: 'せんせい' ,mean:'Thầy/cô' , miss:false , level:1 },
    { id:20 , word:'学生' , hira: 'がくせい' ,mean:'Học sinh, sinh viên' , miss:false , level:1 },
    { id:21 , word:'医者' , hira: 'いしゃ' ,mean:'Bác sĩ' , miss:false , level:1 },
    { id:22 , word:'社員' , hira: 'しゃいん' ,mean:'Nhân viên công ty' , miss:false , level:1 },
    { id:23 , word:'教師' , hira: 'きょうし' ,mean:'Giáo viên' , miss:false , level:1 },
    { id:24 , word:'韓国' , hira: 'かんこく' ,mean:'Hàn Quốc' , miss:false , level:1 },
    { id:25 , word:'中国' , hira: 'ちゅうごく' ,mean:'Trung Quốc' , miss:false , level:1 },
    { id:26 , word:'ベトナム' , hira: 'べとなむ' ,mean:'Việt Nam' , miss:false , level:3 },
    { id:27 , word:'銀行' , hira: 'ぎんこう' ,mean:'Ngân hàng' , miss:false , level:1 },
    { id:28 , word:'本' , hira: 'ほん' ,mean:'Sách' , miss:false , level:1 },
    { id:29 , word:'鉛筆' , hira: 'えんぴつ' ,mean:'Bút chì' , miss:false , level:4 },
    { id:30 , word:'時計' , hira: 'とけい' ,mean:'Đồng hồ' , miss:false , level:1 },
    { id:31 , word:'傘' , hira: 'かさ' ,mean:'Ô, dù' , miss:false , level:1 },
    { id:32 , word:'自動車' , hira: 'じどうしゃ' ,mean:'Xe hơi' , miss:false , level:1 },
    { id:33 , word:'自転車' , hira: 'じてんしゃ' ,mean:'Xe đạp' , miss:false , level:1 },
    { id:34 , word:'雑誌' , hira: 'ざっし' ,mean:'Tạp chí' , miss:false , level:1 },
    { id:35 , word:'手帳' , hira: 'てちょう' ,mean:'Sổ tay' , miss:false , level:1 },
    { id:36 , word:'名刺' , hira: 'めいし' ,mean:'Danh thiếp' , miss:false , level:1 },
    { id:37 , word:'辞書' , hira: 'じしょ' ,mean:'Từ điển' , miss:false , level:1 },    
    { id:38 , word:'英語' , hira: 'えいご' ,mean:'Tiếng Anh' , miss:false , level:1 },
    { id:39 , word:'映画' , hira: 'えいが' ,mean:'Phim' , miss:false , level:1 },
    { id:40 , word:'日本語' , hira: 'にほんご' ,mean:'Tiếng Nhật' , miss:false , level:1 },
    { id:41 , word:'新聞' , hira: 'しんぶん' ,mean:'Báo' , miss:false , level:1 },
    { id:42 , word:'教室' , hira: 'きょうしつ' ,mean:'Lớp học, phòng học' , miss:false , level:3 },
    { id:43 , word:'食堂' , hira: 'しょくどう' ,mean:'Nhà ăn' , miss:false , level:1 },
    { id:44 , word:'事務所' , hira: 'じむしょ' ,mean:'Văn phòng' , miss:false , level:3 },
    { id:45 , word:'会議室' , hira: 'かいぎしつ' ,mean:'Phòng họp' , miss:false , level:1 },
    { id:46 , word:'受付' , hira: 'うけつけ' ,mean:'Bộ phận tiếp tân' , miss:false , level:3 },
    { id:47 , word:'部屋' , hira: 'へや' ,mean:'Căn phòng' , miss:false , level:1 },
    { id:48 , word:'階段' , hira: 'かいだん' ,mean:'Cầu thang' , miss:false , level:1 },
    { id:49 , word:'会社' , hira: 'かいしゃ' ,mean:'Công ty' , miss:false , level:1 },
    { id:50 , word:'お国' , hira: 'おくに' ,mean:'Đất nước' , miss:false , level:3 },
    { id:51 , word:'電話' , hira: 'でんわ' ,mean:'Điện thoại' , miss:false , level:3 },
    { id:52 , word:'靴' , hira: 'くつ' ,mean:'Giầy' , miss:false , level:1 },
    { id:53 , word:'靴下' , hira: 'くつした' ,mean:'Tất, bít tất' , miss:false , level:3 },
    { id:54 , word:'地下' , hira: 'ちか' ,mean:'Tầng hầm, dưới mặt đất' , miss:false , level:1 },
    { id:55 , word:'百' , hira: 'ひゃく' ,mean:'Trăm' , miss:false , level:1 },
    { id:56 , word:'千' , hira: 'せん' ,mean:'Nghìn' , miss:false , level:1 },
    { id:57 , word:'万' , hira: 'まん' ,mean:'Vạn, mười nghìn' , miss:false , level:1 },
    { id:58 , word:'眼鏡' , hira: 'めがね' ,mean:'Kính mắt' , miss:false , level:7 },
    { id:59 , word:'服' , hira: 'ふく' ,mean:'Quần áo' , miss:false , level:3 },
    { id:60 , word:'化粧品' , hira: 'けしょうひん' ,mean:'Mỹ phẩm, đồ hóa trang' , miss:false , level:7 },
    { id:61 , word:'家具' , hira: 'かぐ' ,mean:'Dụng cụ gia đình' , miss:false , level:5 },
    { id:62 , word:'食料' , hira: 'しょくりょう' ,mean:'Lương thực' , miss:false , level:5 },
    { id:63 , word:'駐車場' , hira: 'ちゅうしゃじょう' ,mean:'Bãi đỗ xe' , miss:false , level:4 },
    { id:64 , word:'起きる' , hira: 'おきる' ,mean:'Dậy, thức dậy' , miss:false , level:3 },
    { id:65 , word:'寝る' , hira: 'ねる' ,mean:'Ngủ, đi ngủ' , miss:false , level:3 },
    { id:66 , word:'働く' , hira: 'はたらく' ,mean:'Làm việc' , miss:false , level:3 },
    { id:67 , word:'休む' , hira: 'やすむ' ,mean:'Nghỉ, nghỉ ngơi' , miss:false , level:3 },
    { id:68 , word:'勉強' , hira: 'べんきょう' ,mean:'Học' , miss:false , level:3 },
    { id:69 , word:'終わる' , hira: 'おわる' ,mean:'Hết, kết thúc, xong' , miss:false , level:2 },
    { id:70 , word:'郵便局' , hira: 'ゆうびんきょく' ,mean:'Bưu điện' , miss:false , level:2 },
    { id:71 , word:'図書館' , hira: 'としょかん' ,mean:'Thư viện' , miss:false , level:2 },
    { id:72 , word:'美術館' , hira: 'びじゅつかん' ,mean:'Bảo tàng mỹ thuật' , miss:false , level:2 },
    { id:73 , word:'今' , hira: 'いま' ,mean:'Bây giờ' , miss:false , level:2 },
    { id:74 , word:'半' , hira: 'はん' ,mean:'Một nửa' , miss:false , level:2 },
    { id:75 , word:'午前' , hira: 'ごぜん' ,mean:'Trước 12 giờ trưa, sáng' , miss:false , level:2 },
    { id:76 , word:'午前' , hira: 'ごご' ,mean:'Sau 12 giờ trưa, chiều' , miss:false , level:2 },
    { id:77 , word:'朝' , hira: 'あさ' ,mean:'Buổi sáng' , miss:false , level:2 },
    { id:78 , word:'昼' , hira: 'ひる' ,mean:'Buổi trưa' , miss:false , level:2 },
    { id:79 , word:'晩' , hira: 'ばん' ,mean:'Buổi tối' , miss:false , level:2 },
    { id:80 , word:'夜' , hira: 'よる' ,mean:'Ban đêm' , miss:false , level:2 },
    { id:81 , word:'今朝' , hira: 'けさ' ,mean:'Sáng nay' , miss:false , level:2 },
    { id:82 , word:'今晩' , hira: 'こんばん' ,mean:'Tối nay' , miss:false , level:2 },
    { id:83 , word:'昼休み' , hira: 'ひるやすみ' ,mean:'Nghỉ trưa' , miss:false , level:2 },
    { id:84 , word:'毎朝' , hira: 'まいあさ' ,mean:'Mỗi sáng' , miss:false , level:2 },
    { id:85 , word:'毎晩' , hira: 'まいばん' ,mean:'Mỗi tối' , miss:false , level:3 },
    { id:86 , word:'毎日' , hira: 'まいにち' ,mean:'Mỗi ngày' , miss:false , level:1 },
    { id:87 , word:'月曜日' , hira: 'げつようび' ,mean:'Thứ hai' , miss:false , level:1 },
    { id:88 , word:'火曜日' , hira: 'かようび' ,mean:'Thứ ba' , miss:false , level:2 },
    { id:89 , word:'水曜日' , hira: 'すいようび' ,mean:'Thứ tư' , miss:false , level:2 },
    { id:90 , word:'木曜日' , hira: 'もくようび' ,mean:'Thứ năm' , miss:false , level:3 },
    { id:91 , word:'金曜日' , hira: 'きんようび' ,mean:'Thứ sáu' , miss:false , level:2 },
    { id:92 , word:'土曜日' , hira: 'どようび' ,mean:'Thứ bảy' , miss:false , level:2 },
    { id:93 , word:'日曜日' , hira: 'にちようび' ,mean:'Chủ Nhật' , miss:false , level:2 },
    { id:94 , word:'番号' , hira: 'ばんごう' ,mean:'Số (điện thoại, phòng)' , miss:false , level:2 },
    { id:95 , word:'行く' , hira: 'いく' ,mean:'Đi' , miss:false , level:1 },
    { id:96 , word:'帰る' , hira: '帰る' ,mean:'Về' , miss:false , level:2 },
    { id:97 , word:'来る' , hira: 'くる' ,mean:'Đến' , miss:false , level:2 },
    { id:98 , word:'学校' , hira: 'がっこう' ,mean:'Trường học' , miss:false , level:2 },
    { id:99 , word:'駅' , hira: 'えき' ,mean:'Ga, nhà ga' , miss:false , level:2 },
    { id:100 , word:'飛行機' , hira: 'ひこうき' ,mean:'Máy bay' , miss:false , level:4 },
    { id:101 , word:'船' , hira: 'ふね' ,mean:'Thuyền, tàu bè' , miss:false , level:3 },
    { id:102 , word:'電車' , hira: 'でんしゃ' ,mean:'Tàu điện' , miss:false , level:2 },
    { id:103 , word:'地下鉄' , hira: 'ちかてつ' ,mean:'Tàu điện ngầm' , miss:false , level:2 },
    { id:104 , word:'新幹線' , hira: 'しんかんせん' ,mean:'Tàu shinkansen' , miss:false , level:7 },
    { id:105 , word:'歩いて' , hira: 'あるいて' ,mean:'Đi bộ' , miss:false , level:2 },
    { id:106 , word:'人' , hira: 'ひと' ,mean:'Người' , miss:false , level:2 },
    { id:107 , word:'友達' , hira: 'ともだち' ,mean:'Bạn, bạn bè' , miss:false , level:3 },
    { id:108 , word:'彼女' , hira: 'かのじょ' ,mean:'Chị ấy, bạn gái' , miss:false , level:2 },
    { id:109 , word:'家族' , hira: 'かぞく' ,mean:'Gia đình' , miss:false , level:3 },
    { id:110 , word:'一人で' , hira: 'ひとりで' ,mean:'Một mình' , miss:false , level:2 },
    { id:111 , word:'先週' , hira: 'せんしゅう' ,mean:'Tuần trước' , miss:false , level:2 },
    { id:112 , word:'今週' , hira: 'こんしゅう' ,mean:'Tuần này' , miss:false , level:2 },
    { id:113 , word:'先月' , hira: 'せんげつ' ,mean:'Tháng trước' , miss:false , level:2 },
    { id:114 , word:'今月' , hira: 'こんげつ' ,mean:'Tháng này' , miss:false , level:2 },
    { id:115 , word:'来月' , hira: 'らいげつ' ,mean:'Tháng sau' , miss:false , level:2 },
    { id:116 , word:'去年' , hira: 'きょねん' ,mean:'Năm ngoái' , miss:false , level:3 },
    { id:117 , word:'今年' , hira: 'ことし' ,mean:'Năm nay' , miss:false , level:3 },
    { id:118 , word:'来年' , hira: 'らいねん' ,mean:'Năm sau' , miss:false , level:3 },
    { id:119 , word:'1日' , hira: 'ついたち' ,mean:'Ngày mùng 1' , miss:false , level:4 },
    { id:120 , word:'誕生日' , hira: 'たんじょうび' ,mean:'Ngày sinh nhật' , miss:false , level:4 },
    { id:121 , word:'普通' , hira: 'ふつう' ,mean:'Tàu thường' , miss:false , level:5 },
    { id:122 , word:'急行' , hira: 'きゅうこう' ,mean:'Tàu tốc hành' , miss:false , level:5 },
    { id:123 , word:'特急' , hira: 'とっきゅう' ,mean:'Tàu tốc hành đặc biệt' , miss:false , level:5 },
    { id:124 , word:'成人の日' , hira: 'せいじんのひ' ,mean:'Ngày trưởng thành' , miss:false , level:5 },
    { id:125 , word:'元日' , hira: 'がんじつ' ,mean:'Ngày mồng 1 Tết' , miss:false , level:5 },
    { id:126 , word:'建国記念の日' , hira: 'けんこくきねんのひ' ,mean:'Ngày Quốc khánh' , miss:false , level:7 },
    { id:127 , word:'春分' , hira: 'しゅんぶん' ,mean:'Xuân phân' , miss:false , level:7 },
    { id:128 , word:'秋分' , hira: 'しゅうぶん' ,mean:'Thu phân' , miss:false , level:7 },
    { id:129 , word:'食べる' , hira: 'たべる' ,mean:'Ăn' , miss:false , level:1 },
    { id:130 , word:'飲む' , hira: 'のむ' ,mean:'Uống' , miss:false , level:1 },
    { id:131 , word:'見る' , hira: 'みる' ,mean:'Nhìn, xem, trông' , miss:false , level:1 },
    { id:132 , word:'聞く' , hira: 'きく' ,mean:'Nghe' , miss:false , level:2 },
    { id:133 , word:'読む' , hira: 'よむ' ,mean:'Đọc' , miss:false , level:3 },
    { id:134 , word:'書く' , hira: 'かく' ,mean:'Viết, vẽ' , miss:false , level:3 },
    { id:135 , word:'買う' , hira: 'かう' ,mean:'Mua' , miss:false , level:3 },
    { id:136 , word:'会う' , hira: 'あう' ,mean:'Gặp' , miss:false , level:1 },
    { id:137 , word:'卵' , hira: 'たまご' ,mean:'Trứng' , miss:false , level:3 },
    { id:138 , word:'肉' , hira: 'にく' ,mean:'Thịt' , miss:false , level:3 },
    { id:139 , word:'魚' , hira: 'さかな' ,mean:'Cá' , miss:false , level:3 },
    { id:140 , word:'水' , hira: 'みず' ,mean:'Nước' , miss:false , level:3 },
    { id:141 , word:'お茶' , hira: 'おちゃ' ,mean:'Trà (nói chung)' , miss:false , level:2 },
    { id:142 , word:'紅茶' , hira: 'こうちゃ' ,mean:'Trà đen' , miss:false , level:6 },
    { id:143 , word:'牛乳' , hira: 'ぎゅうにゅう' ,mean:'Sữa bò' , miss:false , level:4 },
    { id:144 , word:'お酒' , hira: 'おさけ' ,mean:'Rượu sake' , miss:false , level:2 },
    { id:145 , word:'手紙' , hira: 'てがみ' ,mean:'Thư tay' , miss:false , level:3 },
    { id:146 , word:'写真' , hira: 'しゃしん' ,mean:'Ảnh' , miss:false , level:4 },
    { id:147 , word:'店' , hira: 'みせ' ,mean:'Cửa hàng, tiệm' , miss:false , level:3 },
    { id:148 , word:'宿題' , hira: 'しゅくだい' ,mean:'Bài tập về nhà' , miss:false , level:5 },
    { id:149 , word:'時々' , hira: 'ときどき' ,mean:'Thỉnh thoảng' , miss:false , level:6 },
    { id:150 , word:'紙' , hira: 'かみ' ,mean:'Giấy' , miss:false , level:7 },
    { id:151 , word:'花火' , hira: 'はなび' ,mean:'Pháo hoa' , miss:false , level:1 },
    { id:152 , word:'荷物' , hira: 'にもつ' ,mean:'Đồ đạc, hành lý' , miss:false , level:2 },
    { id:153 , word:'お金' , hira: 'おかね' ,mean:'Tiền' , miss:false , level:3 },
    { id:154 , word:'切符' , hira: 'きっぷ' ,mean:'Vé' , miss:false , level:4 },
    { id:155 , word:'お土産' , hira: 'おみやげ' ,mean:'Quà' , miss:false , level:5 },
    { id:156 , word:'旅行' , hira: 'りょこう' ,mean:'Du lịch' , miss:false , level:6 },
    { id:157 , word:'静かな' , hira: 'しずかな' ,mean:'Yên tĩnh' , miss:false , level:7 },
    { id:158 , word:'有名な' , hira: 'ゆうめいな' ,mean:'Nổi tiếng' , miss:false , level:1 },
    { id:159 , word:'親切な' , hira: 'しんせつな' ,mean:'Tốt bụng, thân thiện' , miss:false , level:2 },
    { id:160 , word:'元気な' , hira: 'げんきな' ,mean:'Khỏe mạnh' , miss:false , level:3 },
    { id:161 , word:'暇な' , hira: 'ひまな' ,mean:'Rảnh rỗi' , miss:false , level:4 },
    { id:162 , word:'便利な' , hira: 'べんりな' ,mean:'Tiện lợi' , miss:false , level:5 },
    { id:163 , word:'大きい' , hira: 'おおきい' ,mean:'Lớn, to' , miss:false , level:6 },
    { id:164 , word:'小さい' , hira: 'ちいさい' ,mean:'Nhỏ, bé' , miss:false , level:7 },
    { id:165 , word:'新しい' , hira: 'あたらしい' ,mean:'Mới' , miss:false , level:1 }
];


module.exports.listWordData= listWordData;