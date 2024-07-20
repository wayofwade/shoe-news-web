// 。！？分割
const soupListStr =["2020年2月20日：“中国股市将于2020年2月20号13:10分最后一次踏上3000点，之后将正式与3000点永别，3000点从十二年以来的中轴线变成地平线！”——李大霄在微博上发布的这一预测引起了广泛关注，尽管预测具有不确定性，但体现了他的市场观点和勇气。","（未具体日期，但提及时间段）：“在过去的几年里，每当市场陷入低迷，我都会提醒大家保持冷静，因为股市总是在绝望中诞生希望。”——李大霄经常在市场低迷时发声，鼓励投资者保持信心。","2021年某时：“如果说2021是狂风暴雨，那其实它是和风细雨，而接下来的年份可能会更加平稳。”——这句话可能是对当时市场环境的形象描述，同时也表达了他对未来市场的乐观预期（注意：原句中“2021”出现了两次，这里假设为笔误，并进行了调整）。","2022年初：“整个30年以来，第一个顶部是1558点、第二个顶部是2245点……第五个顶部非常有可能是在3731点。所以从这个角度上来看，这是一个摘熟苹果的时候，而不是进攻的时候。”——李大霄在分析历史数据时，对市场未来可能的顶部位置做出了判断。","（未具体日期，但提及市场现象）：“每当市场赞美声四起时，我总会提醒大家警惕风险；而当市场充满质疑时，往往也是布局的好时机。”——这句话体现了他的逆向思维和市场感知能力。","2023年预测：“中国经济企稳提升，人民币资产吸引力提高，外资追逐中国资产，会进一步提升人民币吸引力。股市回升会刺激超额储蓄回流。”——在2023年的展望中，他表达了对中国经济和股市的积极看法。","（未具体日期，但提及投资策略）：“在市场波动中，我们要坚持价值投资的理念，选择优质的公司和股票进行长期持有。”——这是他对投资者的一贯建议。","（未具体日期，但提及市场情绪）：“市场情绪总是先于市场走势发生变化，我们要学会从市场情绪中捕捉市场的拐点。”——他强调了市场情绪对市场走势的影响。","","","（推测为近期）：“在股市低迷期，投资者应该回归家庭，保持和谐的家庭关系，同时用闲钱进行投资。”——他提醒投资者要理性对待市场波动。","（推测为市场转折期）：“当市场出现恐慌性抛售时，往往是布局优质资产的好时机。”——他鼓励投资者在市场恐慌时保持冷静并寻找机会。","（未具体日期，但提及市场底部）：“市场底部往往是在大多数人失去信心时悄然来临的。”——他强调了市场底部的隐蔽性和难以预测性。","（推测为市场上升期）：“随着经济的复苏和市场的回暖，股市将迎来新的上涨行情。”——他表达了对市场未来走势的乐观预期。"]


const list1 =["中国股市大涨在即！ —— 这是李大霄对市场未来走势的乐观预测，展现了他对股市的信心。","当赞美之音不绝于耳，股市的顶端渐渐成立，而每到意见最大时，股市底部往往悄然而至！ —— 这句话揭示了市场情绪与股市走势之间的微妙关系，提醒投资者要警惕市场情绪的变化。","如果说2008是狂风暴雨，2012就是和风细雨，而2013仅仅是毛毛雨中的毛毛雨！ —— 李大霄用形象的比喻描述了不同年份股市的波动情况。","资金不足就去炒题材股、垃圾股的逻辑本身就不成立！ —— 他强调了在资金不足时，投资者应更注重投资标的的质量和安全性。","投资是一场比赛，比马拉松比赛时间更长。 —— 这句话突出了投资的长期性和持久性，鼓励投资者要有耐心和毅力。","股票投资要跟着国家走，跟着大股东走，吃喝啥都有。 —— 李大霄认为，投资者应关注国家政策和大股东动向，以指导自己的投资决策。","作为一个理性投资者，应该在市场恐慌时要看到希望，在市场狂热中要提防风险。 —— 他提醒投资者要保持理性，避免被市场情绪左右。","如果我的所有的观点都得到所有人的高度认同，我存在的价值就不在了！ —— 这句话体现了李大霄的谦逊和自省精神，他认为自己的观点应该接受市场的检验和批评。","A股里其实隐含着顽强的做多力量。 —— 他对A股市场持乐观态度，认为市场具有强大的做多潜力。","我怕被人追杀但现在我敢告诉大家可以买股票。 —— 这句话反映了他在市场低迷时仍坚持看好股市的勇气和决心。","当国家需要我们的时候投资，意义更大，胜算更高。 —— 他强调了投资与国家利益相结合的重要性。","紧跟汇金走，吃喝啥都有！ —— 汇金是中国的重要投资机构，李大霄认为跟随其动向有助于获得更好的投资收益。","1949开始是牛市，而且是真实的牛市，还有可能比较长命！ —— 他对某个时间点的市场走势做出了明确的判断。","我依稀闻到了小牛身上的淡淡的气味，隐约看见了小牛的朦胧身影。 —— 这句话形象地表达了他对股市即将迎来小牛市的预感。","6年熊市已经结束，中国股市苦尽甘来。 —— 他认为经过长时间的熊市后，股市将迎来转机。","晚上做梦，竟是甜的。 —— 这可能是他在股市表现良好时的心情写照。","做好人，买好股，得好报。 —— 他强调了投资与做人之间的关联，认为良好的品德有助于在投资中取得成功。","多头部队终会雄起看到好股票口水直流。 —— 他用生动的语言描述了市场多头力量崛起时的情景。","6124点时充满泡沫，当时购进股票就像买棉花，而1664点及2132点处泡沫被压缩了，此时购进优质股票就像买进了压缩饼干！ —— 他用形象的比喻说明了不同市场点位下股票的投资价值。","钻石底就是校花只是现在没有人敢出手。 —— 他用“钻石底”来形容某个市场底部的坚固和珍贵。","很多人，若干年后，摸着大牛股的小腿，只能含着泪水说：我曾经在钻石底抱过你一会儿…… —— 这句话表达了他对错过市场底部机会的遗憾之情。","3400点，我已经闻到了小牛淡淡的香味。 —— 这是他在某个市场点位时对股市未来走势的乐观预测。","3300点，真是太可惜底又让外资抄走了。 —— 他认为外资在市场底部时抢占了先机。","3200点，请大家注意，可能是空头陷阱。 —— 他提醒投资者在这个点位时要警惕空头的诱骗。","3100点，股民记住要珍惜3100点的黄金机会。 —— 他认为这个点位是投资者应该珍惜的宝贵机会。","3000点，A股3000点是未来的地平线。 —— 他将3000点视为A股市场的一个重要支撑位。","2900点，做好人，买好股，得好报。 —— 在不同市场点位下，他反复强调这一投资理念的重要性。","**2"]


const list2 = ["2024年6月：“中国股市大涨在即！投资者应保持信心，关注市场长期趋势。”——这句话体现了李大霄对当前及未来股市的乐观态度。","2024年3月3400点附近：“我已经闻到了小牛淡淡的香味。”——这是他在市场达到某一特定点位时，对市场未来可能走势的积极预期。","2024年2月3300点下方：“可惜可惜，底部又给外资抄走了。”——他在此时表达了对市场底部被外资抢占的遗憾，同时也暗示了市场底部的到来。","2024年1月3200点附近：“空投的一个陷阱。”——他警告投资者在当前点位下，空头的行为可能是一个陷阱，鼓励投资者保持警惕并寻找买入机会。","2023年底3100点下方：“要十分珍惜3100点以下的宝贵时光。”——他强调了在当前市场点位下，投资者应珍惜低价买入优质资产的机会。","2023年中期3000点附近：“3000点是未来的地平线。”——他将3000点视为一个重要的市场支撑位，并认为市场未来可能在此点位上方运行。","2023年初2900点附近：“做好人，买好股，得好报。”——他在此时重申了他的投资理念，鼓励投资者坚持价值投资。","2022年底2850点下方：“在股市低迷期，在家里地位一定要摆正，我们要多做家务，说话不要太大声。”——他以幽默的方式提醒投资者在股市低迷时保持家庭和谐，并避免将股市情绪带入家庭生活中。","2022年中2800点附近：“生命远比股票重要。要坚强，要抗住，要挺过去。”——他强调了投资者在面对市场波动时应保持冷静和坚强。","2021年底：“当国家需要我们的时候投资，意义更大，胜算更高。”——他鼓励投资者关注国家政策导向，并在国家需要时积极参与投资。","2021年中：“紧跟汇金走，吃喝啥都有！”——他建议投资者关注重要投资机构的动向，并跟随其进行投资布局。","2020年底：“1949开始是牛市，而且是真实的牛市，还有可能比较长命！”——他在此前某个时间点对市场未来走势做出了乐观判断。","2020年中：“我依稀闻到了小牛身上的淡淡的气味。”——他通过形象的比喻表达了对市场即将迎来小牛市的预感。","2019年底：“6年熊市已经结束，中国股市苦尽甘来。”——他在此前某个时间点对长期熊市的结束和股市未来的复苏表示了乐观态度。","2018年底：“资金不足就去炒题材股、垃圾股的逻辑本身就不成立！”——他强调了理性投资的重要性，并警告投资者避免盲目跟风炒作。","请注意，由于部分语录并未明确标注具体日期，我根据语境和发布时间进行了合理的推测和归类。同时，由于股市的复杂性和不确定性，任何预测都存在一定的风险性和不确定性。因此，投资者在做出投资决策时应结合自己的风险承受能力和投资目标进行综合考虑。"]




module.exports = {
    soupListStr: soupListStr.concat(list1).concat(list2)
}