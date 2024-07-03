// 。！？分割
const soupListStr =["在这幸福洋溢的时刻，愿你们的爱情如同璀璨星辰，永恒而闪耀，携手共度每一个美好的明天，幸福美满，白头偕老。","恭喜你们步入婚姻的殿堂，愿你们的婚姻生活充满温馨、甜蜜与理解，相互扶持，共同成长，共创美好未来。","祝福新人永结同心，爱河永浴。愿你们的每一天都如初恋般甜蜜，每一刻都充满爱意，共同书写属于你们的美丽篇章。","婚姻是爱情的升华，也是责任的开始。愿你们在未来的日子里，珍惜彼此，相互包容，携手共进，创造属于你们的幸福传奇。","恭喜你们喜结连理，愿你们的婚姻生活如诗如画，充满浪漫与激情。在未来的日子里，愿你们携手同行，共赴人生的每一个精彩瞬间。","在这特别的日子里，愿你们的爱情像美酒一样越陈越香，婚姻生活如同细水长流，温馨而持久。祝福你们永远幸福，甜蜜相伴。","祝福新人婚姻美满，家庭幸福。愿你们在未来的日子里，相濡以沫，共度风雨，携手创造属于你们的幸福家园。","恭喜你们结为夫妻，愿你们的婚姻生活如同这美好的婚礼一样，充满欢笑与祝福。在未来的日子里，愿你们心心相印，永结同心。","愿你们的婚姻如同这绚烂的烟火，短暂而美丽，却能在彼此的心中留下永恒的印记。祝福你们永远相爱，幸福绵长。","在这充满喜悦的时刻，愿你们的爱情如同这璀璨的灯光，照亮彼此的人生道路。愿你们在未来的日子里，携手并肩，共同迎接每一个美好的明天。"]

const list1 =["愿你们的婚姻如同珍贵的宝石，经过时间的洗礼愈发闪耀，无论风雨变换，都能坚守彼此，幸福相伴到永远。","恭喜你们携手步入婚姻的殿堂，愿这段旅程充满阳光与欢笑，也愿你们能在彼此的陪伴下，勇敢面对生活的每一个挑战。","婚姻是两颗心灵的相互依偎，愿你们在未来的日子里，用爱温暖彼此，用理解包容对方，共同编织属于你们的幸福梦。","祝福你们，从这一刻起，不仅是彼此的伴侣，更是生命中最坚实的依靠。愿你们的婚姻生活充满爱、信任与尊重，共同创造无数温馨回忆。","愿你们的婚姻如同那细水长流的小溪，虽不波澜壮阔，却能在岁月的长河中缓缓流淌，滋养着彼此的心田，直至永恒。","在这个充满爱的日子里，愿你们的婚姻如同这盛开的花朵，绽放出最绚烂的光彩。愿幸福永远伴随着你们，直到世界的尽头。","恭喜你们找到生命中的另一半，愿你们的婚姻如同这坚固的桥梁，连接着彼此的心，无论未来道路如何曲折，都能携手同行，直至彼岸。",""]


const list2 = ["愿你们的婚姻像一首优美的交响乐，和谐而动听，每个音符都跳跃着幸福的旋律，共同演绎出属于你们的精彩乐章。","祝福你们，愿你们的爱情如同那璀璨的星空，无论何时何地，都能照亮彼此的心房，携手共度每一个璀璨的夜晚。","婚姻是两颗心灵的深度交融，愿你们在未来的日子里，不仅共享阳光与欢笑，也能共担风雨与忧愁，携手共筑爱的港湾。","愿你们的婚姻生活如同四季更迭，每个季节都有独特的风景，每个阶段都充满爱的色彩，共同走过春的生机、夏的热情、秋的收获和冬的宁静。","恭喜你们找到了生命中的伴侣，愿你们的婚姻如同那坚固的磐石，任凭风吹雨打，依然屹立不倒，相互依靠，直到永远。","祝福你们，愿你们的婚姻生活如同那醇厚的酒，越陈越香，越久越浓，每一天都比昨天更加甜蜜与温馨。","愿你们的爱情如同那不息的河流，源远流长，奔腾向前，无论遇到多少曲折与险阻，都能携手并肩，勇往直前。","婚姻是两个人共同成长的旅程，愿你们在未来的日子里，相互扶持，共同进步，成为彼此生命中最坚实的后盾。","祝福你们，愿你们的婚姻如同那盛开的花朵，不仅美丽动人，更散发出阵阵芳香，让周围的人都能感受到你们的幸福与甜蜜。","愿你们的婚姻生活如同那绚烂的彩虹，虽然经历风雨，但终将迎来阳光与希望，共同创造出属于你们的彩虹般的人生。","婚姻是爱情的升华，也是责任的开始。愿你们在未来的日子里，不仅享受爱情的甜蜜，更能承担起家庭的责任，共同创造一个温馨和谐的家。","祝福你们，愿你们的婚姻如同那古老的城堡，坚固而温馨，无论外界如何喧嚣，都能保持内心的宁静与幸福。","愿你们的爱情如同那不朽的诗篇，永远传唱下去，让每一个听到的人都能感受到你们之间那份纯真而坚定的爱。","婚姻是两个人携手同行的旅程，愿你们在未来的日子里，不仅共享欢乐与成功，更能共渡难关与挑战，成为彼此生命中不可或缺的一部分。","祝福你们，愿你们的婚姻如同那璀璨的烟火，虽然短暂却绚烂夺目，成为彼此心中永恒的记忆与美好的回忆。","愿你们的婚姻生活如同那温暖的春风，轻轻吹拂着彼此的心田，带来无尽的温馨与幸福，让爱情之花在心中永远绽放。","婚姻是两个人相互理解与包容的过程，愿你们在未来的日子里，能够更加深入地了解对方，更加宽容地接纳对方，共同创造一个充满爱与理解的幸福家园。","祝福你们，愿你们的婚姻如同那坚固的船只，在人生的海洋中乘风破浪，共同驶向幸福的彼岸。","愿你们的爱情如同那不息的火焰，永远燃烧着激情与活力，为彼此的生命带来无尽的温暖与光明。","婚姻是两个人共同编织的梦想，愿你们在未来的日子里，携手共进，努力实现彼此的梦想与愿望，共同创造一个美好的未来。","祝福你们，愿你们的婚姻如同那精美的画卷，每一笔都充满爱意与温情，共同绘制出属于你们的幸福人生。"]


const list3 =["愿你们的婚姻如同细品的老酒，岁月沉淀下愈发醇厚，每一口都是对彼此深情的回味，共赴白头之约。","在这特别的时刻，愿你们的婚姻如同繁星点点，照亮彼此的世界，无论黑夜多么漫长，都有星光相伴。","祝福你们，愿你们的爱情如同那不老的传说，跨越时空的界限，永远充满浪漫与神秘，共同书写爱的传奇。","愿你们的婚姻如同那稳固的灯塔，在生活的海洋中为彼此指引方向，无论风浪多大，都能坚守初心，携手前行。","婚姻是两个人心灵的契合，愿你们在未来的日子里，心与心更加贴近，共同创造属于你们的幸福奇迹。","祝福你们，愿你们的婚姻如同那绵延不绝的山脉，经得起岁月的考验，永远屹立在爱的巅峰，俯瞰世间的美好。","愿你们的爱情如同那绚烂的烟火表演，每一幕都精彩绝伦，每一次绽放都让人心动不已，共同编织出最美的回忆。","婚姻是爱的承诺与践行，愿你们在未来的日子里，不仅说出爱的誓言，更用行动去诠释和证明这份深情厚意。","祝福你们，愿你们的婚姻如同那温馨的家园，充满欢声笑语，彼此是对方最坚实的依靠，共同抵御生活的风雨。","愿你们的爱情如同那不息的河流，穿越岁月的长河，带着对彼此的深情厚意，流向更加美好的未来，共绘幸福蓝图。"]


module.exports = {
    soupListStr: soupListStr.concat(list1).concat(list2).concat(list3)
}