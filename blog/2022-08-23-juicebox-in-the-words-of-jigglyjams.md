---
slug: juicebox-in-the-words-of-jigglyjams
title: Juicebox in the Words of jigglyjams
authors: [felixander]
tags: [dao, interview, juicebox]
---

# Juicebox in the words of jigglyjams

*“Juicebox in the words of” is a series that highlights JB community members in interview form. Learn about members’ roles at JB and what makes them tick.*

*jigglyjams is a magician who resurrects the spirit of ancient golems to do his bidding across many a discord server. You have seen his ghosts. A veritable necromancer, he deftly spins up code that awakens forces of efficiency and workflow streamlining. His “nance” project— the fruits of which have saved countless man-hours— is just the beginning of his venture to take over the world, one bot at a time. Read on to learn more of what makes this master puppeteer tick.*

### Hey jiggly! How’d you find JB?

The whole origin story probably goes back to October of last year. My sister launched this NFT project called Fly Frog. (A fun 10K pfp project.) She and my brother in law worked together on it; he drew the art, she generated media and wrote the smart contract for it. They launched in October and I helped with it. At first after launch, they only sold like 50 of their NFTs lol

We were trying to figure out how to get it going more and get some traction, then all of a sudden a few months later they completely sold out in a few hours.

With that came massive people into the discord, so I helped them manage the inflow with some different bots, writing custom sales bots, etc. Basically I just fell down the rabbit hole of discord bots, got super fascinated and really committed myself to learning how to make them. I was hovering around SharkDAO when it launched and kind of saw my first glimpse of Juicebox through that.

Then one day nicholas tweeted about CanuDAO as this community management DAO interested in bots. My sister tagged me and told me to go work for Canu. I reached out to Zeugh and my first project was the GM bot for JB, and from there I got more involved in JB as time went on.

### You made the leap to JB recently as part of contributor team - what precipitated that leap?

We’d been working with JB for a while through Canu, constantly trying to figure out the best thing to do for JB. It became clear that governance automation is really necessary. I was watching proposals come in and filipv and 0xSTVG would do a lot of manual manipulation, shuffling around, getting things on snapshot, and that got me zeroed in on governance automation as a specific JB need.

Then, I think in early March, filipv and I started working on that process of detailing all the steps he’s doing that could be automated. That helped me break down tasks into little code snippets and start doing governance automation. Five to six weeks later we had a decent prototype that could move proposals around between notion, discord and snapshot. At that time I was still working through Canu, and some Canu proposals didn’t make it though the JB governance process, so I switched over to be a JB contributor.

At JB currently I’m developing the stuff for this project called Nance (short for governance)—

### Are you nancesplaining to me?

Haha, yeah I guess I am. Well this nance project is really for JB at the moment, but it could eventually propagate to anyone who’s building on the Juicebox protocol. I’d love to see the option of like checking a box that says, “hey, I want to configure my nance.” As I work more with gulan and twodam I think we’ll integrate more and more as well.

### Let me throw a criticism at you to react to. web3 is ostensibly full of these smart tech people, right? Why did it take so long to come up with the very obvious need to have bots like this, that save so much time?

I’ve been studying other DAOs and governance systems for a bit - it’s interesting to think about this stuff. There’s a few different camps of people here. Some want to do everything on chain and have a governor contract deployed. That works for some DAOs, sure. But you have to pay for gas, so that decreases governance involvement from community members— why would people spend ETH, especially on proposals they may not particularly care about?

So it’s a weird dichotomy— you want governance because it’s important, but you want engagement, so you don’t want to make it cost money to participate in governance. We’re still figuring out that balance.

Take Snapshot for example— there’s a lot of these governance platforms, and Snapshot is basically the only one being used. It has an insane amount of proposals going through it. Yet even here, having people connect their wallet and click the vote button, like for each proposal, people find that burdensome.

### It is burdensome! That someone has to do that 7 times in a row is legit annoying though, right?

Yeah, for sure. I think a lot of the smart people in the governance process get pulled away to work on fully on-chain stuff, which to me doesn’t make sense for how much it costs to do that. I think I’m on a path to that now, using github as a backend for proposals, kind of like a staged process of proposals where as a proposal moves through the process from idea to temp check to off chain voting to eventually on-chain voting, the proposal becomes more and more immutable.

Once you get to on-chain it’s fully immutable. So automating how that flow happens will get us to a real true DAO (true to the name!). We’ll really hit that “A” in DAO at that point. The on-chain part gets you the voting and automation but it misses the whole preamble of what gets you to that point, and that’s what I see nance as doing.

I love that people like jango, 0xSTVG, you, filipv, gulan, twodam and so many others understand the need for making this autonomous system for governance. It’s very exciting to have been accepted into the JB community!

### If you talk to some of the diehards, the real ideologues, they’ll often tell you that automation in web3 is move toward centralization. In other words, why create and invoke precisely the systems web3 rebelled against. Do you think that’s a fair criticism of automation in web3?

There is some natural centralization around the software I’m writing, absolutely. It’s a system that one puts a proposal through. That said, I am developing it open source— which is a huge part. Right off the bat, the code that’s processing this is open, so anyone can audit and see if the code is modifying anything or any proposals. Initially I was thinking should I do this all this open source, but then I thought fuck it, this will work out and it’s the right thing to do. That’s number 1.

I also think with open source, an understanding of how someone could run it themselves if they so choose, is important. Look at Snapshot, it’s open but people don’t recreate it, they use what’s there and running now. But the option that you *can* use it if you want gives you warm fuzzies of decentralization, even if in practice you’re not doing that.

And there’s also the fact that I can query Snapshot for all my data, and that they have an accessible API and formats and everything is markdown is a big piece as well. I think that’s crucial to getting buy-in for “decentralized” platforms. You always have the option to exit if you choose.

For example, recently I was looking for some block diagram software, and my last company was using LucidChart which I was used it. It’s free at first and after a while you pay 8 bucks a month. So I search around and I find something called draw.io, which has a hosted premium option, for the same price, or it’s open source so you can download it and use it for free. They have a github and a sponsor link, and I was so happy to see that, I sent them like 50 bucks, which is basically what I would pay at Lucid over the course of many months, but I felt more compelled giving to someone who is giving something away rather than committing to a locked system that is proprietary.

### Who’s your fav contributor and why is it Matthew Brooks?

Haha. Matthew Brooks is… let’s see… that drum rolling photography machine is freaking sweet, and Matthew does a ton of random stuff like keeping up with a lot of notion databases, this nice payout list he’s maintaining, his governance TLDR’s he tweets out, and he’s just got such a sweet voice too. He has this powerhouse voice.

### His voice is pure silk. He could say anything to me and I’d feel fuzzy inside.

I feel like he could also probably belt out a rock ballad or something. Like I could see him up there on stage singing some cool shit.

### Crooner music for me.

Yeah, he’d absoltely kill it.

### What’s something people would be surprised to learn about you?

I worked for a self-driving car company which was kinda cool.

### The ultimate auto-bot!

Haha, yeah. Also I was in an improv comedy troupe in school which was a blast. We would do shows and everything. Actually we did an all-improvised musical show with a 3 piece band where we’d kind of have a general idea of what songs are played and we’d make up the lyrics on the spot.

Nowadays, I still go to watch improv. I really thought it was a fun thing to do and it taught me a lot about how to speak to people. You’re doing imrpov all the time in real life, so practicing it consciously helps. One tenant is to heighten the partner on stage, in other words to take what they say and add to it— that’s a great tool to use socially and when working with people in real life. Can’t say enough how glad I am to have studied that.
