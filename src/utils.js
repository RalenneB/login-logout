export const wiseQuotes = {
  quote:
    'I declare that no accomplishment has substance nearly as great as the road used to achieve it. We are not creatures of destinations. It is the journey that shapes us. Our callused feet, our backs strong from carrying the weight of our travels, our eyes open with the fresh delight of experiences lived.',
  prize:
    'Sometimes the prize is not worth the costs. The means by which we achieve victory are as important as the victory itself',
  important:
    "The most important words a man can say are, 'I will do better. The question,' she replied, 'is not whether you will love, hurt, dream, and die. It is what you will love, why you will hurt, when you will dream, and how you will die. This is your choice.",
  king: 'I am, indeed, a king, because I know how to rule myself. He is happiest, be he king or peasant, who finds peace in his home. A lion is called a king of beasts obviously for a reason. He who reigns within himself and rules passions, desires, and fears is more than a king.',
  'about life':
    'Life before Death. Strength before Weakness. Journey before Destination. ',
  faith:
    "It is easy to believe in something when you win all the time...The losses are what define a man's faith.",
  confidence: "I've always been very confident in my immaturity.",
  balance:
    "Somehow, we'll find it. The balance between whom we wish to be and whom we need to be. But for now, we simply have to be satisfied with who we are.",
  right:
    'Somebody has to start. Somebody has to step forward and do what is right, because it is right.',
};

export const getUser = () => sessionStorage.getItem('username') || null;

export const sleep = d =>
  new Promise(r => {
    setTimeout(r, d);
  });
