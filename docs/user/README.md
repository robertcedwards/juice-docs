---
title: Make Your Juicebox Project
sidebar_position: 1
---

<b class="text-center" style={{fontSize: "24px"}}>Juicebox lets you launch an Ethereum-based treasury for your project, and evolve its rules over time.</b><br/><br/>

<details>

<summary>Video Guides</summary>

<iframe width="560" height="315" src="https://www.youtube.com/embed/sT8m75QDXvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p class="subtitle">Launch your project in 5 minutes. Worry about the details later.</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/kWxaFn4iwug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p class="subtitle">Detailed project configuration guide.</p>

</details>


## Launch Your Project

Start by connecting your wallet to [juicebox.money](https://juicebox.money) and clicking `Launch your project`! Enter information on the left side of your screen—the right side is a preview. The NFT which represents your project will be minted to your wallet once you create your project. You can send this NFT to a multisig or another address if you would like to transfer your project's ownership.

:::tip
Consider creating a test project on the [Rinkeby testnet version of Juicebox](https://rinkeby.juicebox.money) before creating a mainnet project. If you need help deciding how to configure your project, ask in the [Juicebox DAO Discord](https://discord.gg/juicebox).
:::

## Configuring Your Project

<details>

<summary>Project Details</summary>

### Project Details

#### Overview

**Project Details** are displayed on your [juicebox.money](https://juicebox.money) project page. This section includes your project's title, description, logo, important links, and pay button customization.

- These details can be updated later.
- Emojis can be used in these fields.
- This information is stored on [IPFS](https://ipfs.io/) via [Pinata](https://www.pinata.cloud/).

#### Options

|Field|Description|
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|**Project name**|<p>The title of your project, which will appear on your project page and on the <a href='https://juicebox.money'>juicebox.money</a> home page.</p>|
|**Project description**|<p>This description will appear on your project page. Project creators often use this space for stating their project's goals and providing context.</p>|
|**Logo** |<p>Your project's logo, which will be displayed on your project page and on the <a href='https://juicebox.money'>juicebox.money</a> home page. Upload a GIF for an animated logo! Filesize must be under 1 MB.</p> |
|**Website**|<p>A link to any website, which will be displayed on your project page. Project creators often link to their project's landing page. If unnecessary, this field can be left blank.</p>|
|**Twitter handle**|<p>A Twitter handle, which will be displayed as a link on your project page. Do not type an `@` before the handle—it will be added automatically. Project creators often link to their project's official Twitter account. If unnecessary, this field can be left blank.</p>|
|**Discord link**|<p>A Discord server invite, which will be displayed as a link on your project page. Project creators often link to an official project Discord server. If unnecessary, this field can be left blank.</p>|
|**Pay button text**|<p>The pay button text on your project page. The default is `Pay`, and `Donate` is a popular alternative.</p>|
|**Pay disclosure**|<p>The pay disclosure will be shown to people before they pay your project. Project creators often use this to provide context or to display an agreement.</p>|

#### Examples

<img src="/img/project-guide/details0.png" width="100%" style={{display: "block", margin: "auto"}} />
<p style={{textAlign: "center"}}><i>Project page on <a href='https://juicebox.money'>juicebox.money</a></i></p><br/>
<img src="/img/project-guide/details1.png" width="80%" style={{display: "block", margin: "auto"}} />
<p style={{textAlign: "center"}}><i>Payment page on <a href='https://juicebox.money'>juicebox.money</a></i></p>

</details>

<details>

<summary>Funding</summary>

### Funding

#### Overview

**Funding** parameters dictate how your project distributes funds. This section also dictates the behaviour of your project's funding cycle. A project's funding cycle determines how its time-locked rules operate. These details can be updated over time.

#### Options

|Field|Description|
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|**Automate funding cycles**|<p>Projects are expressed in terms of funding cycles. <ul><li>Payouts happen once per funding cycle.</li><li>Some [token incentives](token.md) are calculated using funding cycles.</li><li>Most importantly, projects cannot be reconfigured in the middle of a funding cycle. Instead, changes are queued for the <i>next</i> funding cycle.</li></ul>With automated funding cycles turned off, the project owner can reconfigure the project at any time, triggering a new funding cycle in the process. This provides flexibility for the project owner, but increases the community's percieved risk of rugpulls or other malicious behaviour.<br/><br/>When automated funding cycles are turned on, the project owner must choose a cycle duration. A shorter funding cycle provides more flexibility, but greater percieved risk. A longer funding cycle will do the opposite.<br/><br/>Automated funding cycles are particularly useful for projects with regular costs or payouts.</p>|
|**Payouts**|<p>Payouts dictate how funds leave a treasury.<ul><li>*Amounts* payouts are specific ETH or dollar amounts.</li><li>*Percentages* payouts are percentages of the entire treasury.</li></ul>Payouts to Ethereum addresses invoke a 2.5% fee, which is routed to the [Juicebox DAO treasury](https://juicebox.money/#/v2/p/1). These fees issue JBX tokens, granting projects partial ownership of the ecosystem. Payouts to other Juicebox projects do not invoke fees.<br/><br/>Funds not needed for a project's payouts are considered [overflow](/dev/learn/glossary/overflow). Community members can redeem their tokens for a portion of overflow funds, if enabled by the project owner. Overflow also serves as a project's runway. Projects using *percentages* payouts do not have any overflow.</p>|

#### Examples

<img src="/img/project-guide/funding0.png" width="60%" style={{display: "block", margin: "auto"}} />
<p style={{textAlign: "center"}}><i>Funding cycle information on <a href='https://juicebox.money'>juicebox.money</a></i></p><br/>
<img src="/img/project-guide/funding1.png" width="65%" style={{display: "block", margin: "auto"}} />
<p style={{textAlign: "center"}}><i>A project with ETH payout amounts on <a href='https://juicebox.money'>juicebox.money</a></i></p>

</details>

<details>

<summary>Token</summary>

### Token

#### Overview

When people pay a project, project tokens are minted. **Token** parameters dictate how those tokens work.
- Token balances are tracked in the Juicebox contracts by default. If desired, project owners can issue an [ERC-20](https://www.investopedia.com/news/what-erc20-and-what-does-it-mean-ethereum/) on [juicebox.money](https://juicebox.money) once their project is deployed. This ERC-20 can be claimed by community members.
- Project tokens are often used for voting in governance, gated access to a Discord server, an NFT mint, or something else.
- These rules can be updated over time.

#### Options

|Field|Description|
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|**Initial mint rate**|<p>The number of project tokens minted when 1 ETH is contributed.</p>|
|**Reserved tokens**|<p>Tokens are minted when people pay your project. Reserved tokens can be used to control where those tokens go.<br/><br/>By default, all tokens go to the person that pays your project. If the reserved rate is set to 30%, the person that pays your project will only receive 70% of the tokens minted by that payment. The remaining 30% of tokens will go to Ethereum addresses and Juicebox projects chosen by the project owner.<br/><br/>Project owners often use reserved tokens to ensure that core project members maintain a voice in governance as a project grows. A higher reserve rate makes a project more resilient to takeover, but reduces the incentive for individuals to contribute to your project (as they will receive fewer project tokens). A lower reserve rate will do the opposite.</p>|
|**Discount rate**|<p>The percentage your mint rate will decrease by every funding cycle. In other words: *how much more expensive do project tokens become each funding cycle?*<br/><br/>If a project has an intial mint rate of 1,000,000 tokens per ETH and a discount rate of 10%, that project's mint rate will be 900,000 tokens per ETH in its second funding cycle, and 810,000 tokens per ETH in the funding cycle after that. This mechanic encourages early contributions, but may also discourage later contributors if too extreme.</p>|
|**Redemption rate**|<p>By default, tokens can be redeemed for a proportional amount of [overflow](/dev/learn/glossary/overflow).<ul><li>Funds exceeding your costs/payouts are considered overflow.</li><li>By default, a token holder who redeems ten percent of all project tokens will receive ten percent of the overflow.</li></ul>The redemption rate alters this behaviour—if set to 60%, project tokens are only redeemable for 60% of the overflow they would otherwise correspond to. This means that somebody redeeming 10% of project tokens would only receive ~6% of the overflow, leaving the other ~4% in the treasury.<br/><br/> The funds remaining in the treasury increase the proportional value of other tokens. The redemption rate mechanic rewards individuals who redeem their project tokens later rather than earlier.</p>|

#### Examples

<img src="/img/project-guide/token0.png" width="60%" style={{display: "block", margin: "auto"}} />
<p style={{textAlign: "center"}}><i>A mint rate displayed on <a href='https://juicebox.money'>juicebox.money</a></i></p><br/>
<img src="/img/project-guide/token1.png" width="70%" style={{display: "block", margin: "auto"}} />
<p style={{textAlign: "center"}}><i>Reserved tokens on <a href='https://juicebox.money'>juicebox.money</a></i></p><br/>
<img src="/img/project-guide/token2.png" width="60%" style={{display: "block", margin: "auto"}} />
<p style={{textAlign: "center"}}><i>Token incentive information on <a href='https://juicebox.money'>juicebox.money</a></i></p>

</details>

<details>

<summary>Rules</summary>

### Rules

#### Overview

**Rules** include restrictions on project reconfigurations and global toggles for pausing payments and enabling at-will token minting.

#### Options

|Field|Description|
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|**Pause payments**|<p>When enabled, people cannot pay your project. Project owners have used this in between fundraising periods, or when wanting to completely shut off token issuance.</p>|
|**Allow token minting**|<p>When enabled, the project owner can mint project tokens to any address at will. This could be used for setting up a "premine", or to create an additional token reserve for the DAO.</p>|
|**Reconfiguration rules**|<p>Reconfiguration rules are conditions which must be met for a project to be reconfigured. Under the default 3-day delay, a reconfiguration must be submitted at least 3 days before the next funding cycle starts. This gives the community time to verify queued reconfigurations and prevents a last-second rug pull.</p>|


</details>
