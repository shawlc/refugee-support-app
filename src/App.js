import React from "react";
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer ,GeoJSON} from 'react-leaflet'
import './App.css';
import countries from './countries.json';
import programs from './refugeeprograms.json';
import $ from 'jquery';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import aboutimg from "./images/about.jpg"
import meimage from "./images/middleeast.jpg"
import asiaimage from "./images/asia.jpg"
import africa from "./images/africalarge.jpg"
import eurimage from "./images/europe.jpg"
import americaimage from "./images/americaslarge.jpg"
import whycash1 from "./images/whycash1.png"
import whycash2 from "./images/whycash2.png"
import whycash3 from "./images/whycash3.png"



import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

function About() {

  const pStyle = {
    textIndent: '30px'
  };

  return (
    <div>

    <div className = "text">
    <div id="rise">
      <h2>Mission</h2>
      <p style={pStyle}>Refugees face immense financial hardships. The global trend is that many refugees reside in host countries that have not fully allowed for their integration into the local labor force and native community. Barring refugees from legal employment sets preconditions for two particular concerns: labor and human rights abuses through informal employment arrangements where basic rights are susceptible to abuse; and crippling poverty induced by not having access to jobs that generate a sufficient income. </p>
      <p style={pStyle}>Poverty is one of the biggest traps refugees find themselves in, and addressing this issue through poverty alleviation programs is key for refugee resettlement and community integration.</p>
      <p>A ‘cash-based intervention' is any intervention in which cash or vouchers for goods or services are provided to refugees and other persons of concern (PoC) either as individuals or as representatives of a community.</p>
      <p style={pStyle}><b>Multipurpose cash grants (MPGs)</b> are regular or one-off cash transfers to a household that fully or partially cover a set of basic or recovery needs in different sectors (for instance, for shelter, food, education, and livelihood) and support protection and solutions outcomes. By definition, MPGs are unrestricted cash transfers that put beneficiary choice (the prioritisation by beneficiaries of their own needs) at the centre of programming. They are designed to offer refugees and other PoC as much dignity, flexibility and efficiency as possible commensurate with their needs and capacities.</p>
      <h2>About Us</h2>
      <p>This website is an assignment for a Refugee Law class at the University of Pennsylvania Law School, and was assembled by students. </p>
      <p>Anahita Kumar is a master’s student at the University of Pennsylvania studying International Educational Development. She specializes in urban immigrant poverty and its effects on child development. <br></br>Anahita can be contacted at kanahita@gse.upenn.edu</p>
      <p>Matt Ferry is a master’s student at the University of Pennsylvania studying International Educational Development. He works at Nationalities Service Center, an immigration and refugee resettlement agency in Philadelphia. <br></br>Matt can be reached at mferry@gse.upenn.edu</p>
      <p>Bobby Hausen is a second-year law student at the University of Pennsylvania Law School. He has volunteered with the Penn Law Immigrant Rights Project. <br></br>Bobby can be reached at rhausen@pennlaw.upenn.edu</p>
      <h3>Acknowledgments</h3>
      <p>Thanks to Leonard C. Shaw, a master's student at the University of Pennsylvania School of Arts and Sciences, for developing the website</p>
    </div>
    </div>
    <img id="image" src={aboutimg} alt="Image of Cash Transfer"/>
    </div>
  );
}

function CashSupport() {
  return (
  <div>
  <div className="text">
  <div id="rise">
  <div>
      <h2>The Effects of Poverty</h2>
      <p><span style={{fontWeight: 400}}>Poverty involves a complex array of risk factors that adversely affect the population in a multitude of ways. The four primary risk factors afflicting families living in poverty are</span></p>
      <ul>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Emotional and social challenges.</span></li>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Acute and chronic stressors.</span></li>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Cognitive lags.</span></li>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Health and safety issues.</span></li>
      </ul>
      <p><span style={{fontWeight: 400}}>Graber and Brooks-Gunn (1995) estimated that in 1995, 35 percent of poor families experienced six or more risk factors (such as divorce, sickness, or eviction); only 2 percent experienced no risk factors. In contrast, only 5 percent of well-off families experienced six or more risk factors, and 19 percent experienced none.</span></p>
      <p><span style={{fontWeight: 400}}>The aggregate of risk factors makes everyday living a struggle; they are multifaceted and interwoven, building on and playing off one another with a devastatingly synergistic effect (Atzaba-Poria, Pike, &amp; Deater-Deckard, 2004). In other words, one problem created by poverty begets another, which in turn contributes to another, leading to a seemingly endless cascade of deleterious consequences. A head injury, for example, is a potentially dire event for a child living in poverty. With limited access to adequate medical care, the child may experience cognitive or emotional damage, mental illness, or depression, possibly attended with denial or shame that further prevents the child from getting necessary help; impairments in vision or hearing that go untested, undiagnosed, and untreated; or undiagnosed behavior disorders, such as AD/HD or oppositional personality disorder.</span></p>
      <p><span style={{fontWeight: 400}}>It's safe to say that poverty and its attendant risk factors are damaging to the physical, socioemotional, and cognitive well-being of children and their families (Klebanov &amp; Brooks-Gunn, 2006; Sapolsky, 2005). Data from the Infant Health and Development Program show that 40 percent of children living in chronic poverty had deficiencies in at least two areas of functioning (such as language and emotional responsiveness) at age 3 (Bradley et al., 1994). The following two sections examine how inferior provisions both at home and at school place poor children at risk for low academic performance and failure to complete school.</span></p>
      <p>&nbsp;</p>
      <img id="imagetext" src={whycash1} alt="Image of Cash Transfer"/>
      <p><strong>Why Cash Transfers?</strong></p>
      <p><span style={{fontWeight: 400}}>Cash transfers are a successful method for assisting refugee families who have settled in cities where large distributions of aid are not possible or ineffective. This innovative approach has proven transformational for families because cash transfers:</span></p>
      <p><br /><br /></p>
      <img id="imagetext" src={whycash3} alt="Image of Cash Transfer"/>
        <p>&nbsp;</p>
      <img id="imagetext" src={whycash2} alt="Image of Cash Transfer"/>
      <p>&nbsp;</p>
      <p><strong><br /></strong><strong>How do Cash Transfers Work?</strong></p>


      <p><span style={{fontWeight: 400}}>The UNHCR program (The current largest in the world) is designed to get help to families quickly and securely, through a customized 4-step approach. Here’s how it works:</span></p>
      <ol>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}> &nbsp;</span><strong>Families call the Helpline</strong><span style={{fontWeight: 400}}> to apply for cash assistance</span><span style={{fontWeight: 400}}><br /></span><span style={{fontWeight: 400}}><br /><br /></span></li>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}> &nbsp;</span><strong>A home visit is conducted</strong><span style={{fontWeight: 400}}> and a questionnaire completed. Families that meet the criteria are registered in the program</span><span style={{fontWeight: 400}}><br /></span><span style={{fontWeight: 400}}><br /><br /></span></li>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}> &nbsp;</span><strong>Successful applicants open a bank account</strong><span style={{fontWeight: 400}}> into which UNHCR deposits money each month</span><span style={{fontWeight: 400}}><br /></span><span style={{fontWeight: 400}}><br /><br /></span></li>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}> &nbsp;</span><strong>Recipients withdraw cash</strong><span style={{fontWeight: 400}}> each month from their secure account at any ATM</span></li>
      </ol>
      <p><span style={{fontWeight: 400}}>The entire process takes less than 30 days, with money arriving within 4 days of eligibility being confirmed.</span></p>
      <p><br /><br /><br /></p>
    </div>

  </div>
  </div>
  <img id="image" src={aboutimg} alt="Image of Cash Transfer"/>
  </div>
  )
}

function RegionalBreakdown(){
  return (
    <div id="tabpage">
    <Tabs>
    <TabList>
      <Tab><h3>Middle East & North Africa</h3></Tab>
      <Tab><h3>Asia & the Pacific</h3></Tab>
      <Tab><h3>Europe</h3></Tab>
      <Tab><h3>Americas</h3></Tab>
      <Tab><h3>Africa</h3></Tab>
    </TabList>

    <TabPanel>
      <div className="text">
      <div id="rise">
      <div>
        <p><strong>Cash-based Assistance in MENA</strong></p>
        <p><span style={{fontWeight: 400}}>Cash-based programming has been thoroughly assessed and have received widespread support. In 2016, the </span><a href="https://www.odi.org/publications/10505-cash-transfers-what-does-evidence-say-rigorous-review-impacts-and-role-design-and-implementation"><span style={{fontWeight: 400}}>Overseas Development Institute (ODI) published a policy brief</span></a><span style={{fontWeight: 400}}> that reviewed 165 studies of 56 cash transfer programs in a variety of contexts. Their brief highlighted that cash transfers have resulted in greater outcomes for: reducing monetary poverty; increased attendance in schools; decreases in child labor; increased health and dietary diversity; and can result in greater savings. Cash transfer programs have received high-praise from </span><a href="https://reliefweb.int/sites/reliefweb.int/files/resources/Secretary-General%27s%20Report%20for%20WHS%202016%20%28Advance%20Unedited%20Draft%29.pdf"><span style={{fontWeight: 400}}>former United Nations Secretary General Ban Ki-Moon</span></a><span style={{fontWeight: 400}}>, who said “where markets and operational contexts permit, cash-based programming should be the preferred and default method of support.” </span></p>
        <p>&nbsp;</p>
        <p><span style={{fontWeight: 400}}>Among UNHCR’s 10 largest cash-related programs, seven are implemented in Middle Eastern and North African countries: Lebanon; Jordan; Yemen; Iraq; Turkey; Egypt; and Syria. Cash-transfers are a preferred mode of support in these countries, by host governments and partners alike. For example, in Jordan, where cash assistance reached an average of 143,000 Syrian refugees in 2018 and the </span><a href="https://static1.squarespace.com/static/522c2552e4b0d3c39ccd1e00/t/5956897e78d1714f5b61f5c2/1498843547605/JRP+2017-2019+-+Full+-+%28June+30%29.pdf"><em><span style={{fontWeight: 400}}>Jordan Response Plan for the Syria Crisis 2018-2020</span></em></a> <span style={{fontWeight: 400}}>budgets $227 million for three years of additional cash assistance. </span><a href="https://displacement.iom.int/system/tdf/reports/Yemen%20Area%20Assessment%20Round%2037.pdf?file=1&type=node&id=5295"><span style={{fontWeight: 400}}>In Yemen</span></a><span style={{fontWeight: 400}}>, where there are roughly 3.6 million internally displaced people, the World Bank and UNICEF are delivering unconditional cash transfers reaching an estimated 9 million people. </span></p>
        <p>&nbsp;</p>
        <p><strong>Cash-based Assistance in Exclusionary Host Countries: Lebanon</strong></p>
        <p><span style={{fontWeight: 400}}>Cash-based programs are a critical means of support for refugees in host countries with exclusionary labor laws. In Lebanon, refugees have faced restrictive policies that limit their access to work, education, and healthcare. The consequence being that roughly 80% of refugee families live below poverty and have few means to improve their financial circumstances. Cash transfers are effectively a lifeline for Syrian refugees in Lebanon, who depend on such assistance to cover nearly all of their expenses. </span></p>
        <p>&nbsp;</p>
        <p><span style={{fontWeight: 400}}>In 2017, </span><a href="https://www.hrw.org/news/2018/07/04/refugee-rights-lebanon-not-debate"><span style={{fontWeight: 400}}>Human Rights Watch visited Arsal</span></a><span style={{fontWeight: 400}}>, a town in Lebanon along the northeast border with Syria. The conditions Syrians lived under in Arsal had been so harsh that many refugees had no other choice but to return to Syria. Child labor has become prominent among Syrian refugees within Lebanon, with 200,000 children working. </span></p>
        <p>&nbsp;</p>
        <p><span style={{fontWeight: 400}}>UNICEF collaborated with Lebanon’s Ministry of Education and the World Food Programme to pilot a conditional cash transfer program–</span><a href="https://www.unicef-irc.org/publications/pdf/De%20Hoop%20et%20al%20for%20WEB.pdf"><span style={{fontWeight: 400}}>Min Ila</span></a><span style={{fontWeight: 400}}>–to increase enrollment and attendance among Syrian refugees. Roughly 40% of Syrian children in Lebanon remain out of school, with poverty being a significant barrier to access. Min Ila had promising results: enrollment in the afternoon shifts of double shift schools increased by 20%. Similar education-related cash transfer programs have been implemented in both Jordan and Turkey. &nbsp;Within Lebanon, cash transfers have shown promise for reducing three prevalent issues: involuntary return to Syria spurred by extreme poverty and harsh conditions; child labor among Syrian children; and fiscal barriers to accessing school. </span></p>
        <p>&nbsp;</p>
        <p><strong>Modes of Delivery in MENA</strong></p>
        <p><span style={{fontWeight: 400}}>Delivering assistance through cash transfers instead of vouchers has positive impacts on refugees. Cash transfers have allowed refugee households to prioritize certain expenses and use their assistance more effectively. The World Food Programme funded a study in Lebanon by the Boston Consulting Group that found cash increased refugees’ purchasing power by up to 19% over vouchers as they did not have to shop at designated shops accepting vouchers. </span></p>
        <p>&nbsp;</p>
        <p><span style={{fontWeight: 400}}>The modes of delivery for cash assistance in the Middle East has grown varied and complicated given the amount of actors involved. In Jordan, several modes of delivery are being used. UNHCR uses the </span><a href="https://www.unhcr.org/596331dd7.pdf"><span style={{fontWeight: 400}}>Common Cash Facility</span></a><span style={{fontWeight: 400}}>, in which refugees can access cash assistance through an ATM that uses an iris scan to verify identity. Whereas UNHCR provides refugees with physical cash, Mercy Corps has piloted an alternative cash delivery system under the </span><a href="https://www.mercycorps.org/sites/default/files/Mobile%20Wallet_Increased%20Accessibility%20Reduced%20Visibility_0.pdf"><span style={{fontWeight: 400}}>“Dinarak Mobile App.”</span></a><span style={{fontWeight: 400}}> The app acts as a platform for making in-store purchases, paying bills, transferring cash, or withdrawing funds at cash-out points. The World Food Programme is also piloting a cash delivery system through </span><a href="https://innovation.wfp.org/project/building-blocks"><span style={{fontWeight: 400}}>blockchain technology</span></a><span style={{fontWeight: 400}}>. </span></p>
        <p>&nbsp;</p>
        <p><span style={{fontWeight: 400}}>The array of delivery models is impressive, though the lack of coordination among actors has been a cause for concern. Donors have often complained that the amount of actors providing cash assistance has impacted effectiveness. In some contexts, such as Iraq, </span><a href="https://www.odi.org/publications/10763-challenging-system-humanitarian-cash-transfers-iraq"><span style={{fontWeight: 400}}>The Overseas Development Institution</span></a><span style={{fontWeight: 400}}> assessed efforts to facilitate greater coordination between actors. Mercy Corps led a cash working group to improve coordination of delivery among actors and arrive to a single platform. Four cash-delivery systems are used in Iraq: the World Food Progamme has SCOPE; UNHCR the ASSIST platform; and INGOs used either Last Mile Mobile Solutions (LMMS) and RedRose. In the end, ODFI found that working group did not end with a single, multi-sector platform or greater coordination at a technical level as competition between agencies proved stifled.</span></p>
        <p>&nbsp;</p>
        <p><strong>Ways to Get Involved in Cash Assistance</strong></p>
        <p><span style={{fontWeight: 400}}>There are several ways to get involved with cash assistance advocacy.</span><a href="http://www.cashlearning.org/about-us/overview"> <span style={{fontWeight: 400}}>The Cash Learning Partnership</span></a><span style={{fontWeight: 400}}> (CaLP) is a partnership of humanitarian actors engaged in cash and voucher assistance policy, practice, and research. CaLP operates as an advocacy partnership through serving as a means to learn, share knowledge, network, and coordinate policy and interventions. There are two ways to become involved in CaLP’s initiatives. </span></p>
        <p>&nbsp;</p>
        <ul>
          <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>First, CaLP considers application for</span><a href="http://www.cashlearning.org/membership/how-to-become-member"> <span style={{fontWeight: 400}}>Membership</span></a><span style={{fontWeight: 400}}> from interested parties, including academic institutions and private sector actors. Membership offers a means to provide technical guidance to Cash and Voucher Assistance (CVA) and engage with leaders in the field. </span></li>
          <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>CaLP also has a</span><a href="http://www.cashlearning.org/about-us/technical-advisory-group-1"> <span style={{fontWeight: 400}}>Technical Advisory Group</span></a><span style={{fontWeight: 400}}>, which provides technical direction of the agency and provides guidance to the wider community of practice in CVA.</span></li>
        </ul>
        <p>&nbsp;</p>
        <p><strong>Microfinance in MENA</strong></p>
        <p><span style={{fontWeight: 400}}>UNHCR offers microcredit loans under its </span><a href="https://www.unhcr.org/55005bc39.pdf"><span style={{fontWeight: 400}}>Graduation Approach mode</span></a><span style={{fontWeight: 400}}>l, a program to address the needs of those who were too poor for microcredit. It is a three step, twenty-four month process, with a completion criteria requiring that participants “at least one loan repaid within a savings-and-credit group.” Through this model, UNHCR effectively offers refugees financial tools, livelihood skills and savings, and other opportunities towards finishing from the program. </span></p>
        <p>&nbsp;</p>
        <p><span style={{fontWeight: 400}}>The Graduation Approach has only recently been formally adopted by UNHCR and has not been widely scaled. However, it had a promising </span><a href="https://www.unhcr.org/5a9e99884"><span style={{fontWeight: 400}}>pilot launch in Egypt</span></a><span style={{fontWeight: 400}}>, where it reached 1275 households, including Syrian refugees. Six months into the program, 68% of participants on the wage employment track had a job and those in the 97% percent of participate in Cairo on self-employment track had started businesses. </span></p>
        <p>&nbsp;</p>
        <p><a href="https://www.rsc.ox.ac.uk/publications/micro-finance-in-refugee-contexts-current-scholarship-and-research-gaps"><span style={{fontWeight: 400}}>A paper published</span></a><span style={{fontWeight: 400}}> through the University of Oxford’s Refugee Studies Centre found that the largest provider of Microfinance loans is the United Nations Relief and Works Agency (UNRWA), which has a mandate for Palestinian refugee protection. UNRWA provides Microfinance loans in the Gaza Strip, West Bank, Jordan, and Syria until 2011. The UNRWA Microfinance program has largely been successful, granting over 360,000 loans totaling $400 million. A 2006 UNRWA study found that 62% of UNRWA borrowers had never before accessed credit from a financial institution.</span></p>
        <p>&nbsp;</p>
        <p><span style={{fontWeight: 400}}>While microfinance has positively some refugees through UNHCR Egypt and UNRWA, Microfinance programs have not been without their challenges. Designing and implementing suitable financial services for refugees has proven fraught in certain contexts. In Lebanon, where institutional barriers to access are highly pervasive, refugees may not have a productive opportunity to use microcredit and earn enough to repay the loan. Though, it is worth mentioning that 16% of micro-lending non-profit </span><a href="https://www.centerforfinancialinclusion.org/financial-inclusion-of-refugees-al-majmoua-in-lebanon/"><span style={{fontWeight: 400}}>Al Majmoua</span></a><span style={{fontWeight: 400}}>’s clients are non-Lebanese, which includes migrant workers, Palestinians, and Syrian refugees. In 2015, all of Al Majmoua’s clients, including the non-Lebanese, had a risk rate below 1% on their 30 day portfolio. </span></p>
        <p>&nbsp;</p>
        <p><span style={{fontWeight: 400}}>Particularly in non-Gulf Middle Eastern and North African countries, Microfinance is a young field. It is rare to find Microfinance institutions in refugee hosting countries that serve the population. In Jordan, </span><a href="https://reliefweb.int/sites/reliefweb.int/files/resources/66387.pdf"><span style={{fontWeight: 400}}>UNHCR reported that</span></a><span style={{fontWeight: 400}}> only the Microfund for Women provides micro-credit loans to Syrian refugees, though only women. Implemented appropriately for context, micro-credit programs for refugees could provide a significant number of refugees with formal access to credit. An important consideration is providing opportunities for refugees to expand their financial literacy. Expanded access to programs that successfully allow for repaying micro-credits would reduce the reliance that refugees have on informal models of lending and associated risks. </span></p>
        <p>&nbsp;</p>
        <p><span style={{fontWeight: 400}}>Lending to refugees does not mean higher risk than lending to local populations. Similarly to Lebanon, </span><a href="https://reliefweb.int/sites/reliefweb.int/files/resources/66387.pdf"><span style={{fontWeight: 400}}>UNHCR reported</span></a><span style={{fontWeight: 400}}> that refugee microcredit clients in Jordan have a risk rate below 1% over their days. In fact, UNHCR found that “risk levels observed for refugees no higher than those of other, Jordanian, clients. INGOs and private sector micro-financing programs could lead to greater self-sufficiency and economic outcomes for refugee populations. </span></p>
        <p>&nbsp;</p>
        <p><strong>Ways to Get Involved in Microfinance in MENA</strong></p>
        <p><span style={{fontWeight: 400}}>Microfinance is a a young sector in the MENA region, and its growth has grown stagnate in several countries amidst the absence of policy and regulatory frameworks. In times past, firms have played an immense role in supporting the development of microfinance institutions. For example, in 2008, </span><a href="https://hls.harvard.edu/making-a-difference-through-microfinance/"><span style={{fontWeight: 400}}>Orrick, Herrington &amp; Sutcliffe</span></a><span style={{fontWeight: 400}}> helped develop an $8.5 million dollar microcredit investment fund in Latin America. </span><a href="https://www.orrick.com/api/content/downloadattachment?id=524fed95-cbd6-43f6-b37f-dcdec7f0e164"><span style={{fontWeight: 400}}>Orrick</span></a><span style={{fontWeight: 400}}> has also advised CHF International on two microfinance projects: funding its affiliated microfinance institution in Jordan by the Overseas Private Investment Corporation and assisted in established a microfinance institution in Sudan.</span></p>
        <p>&nbsp;</p>
        <p><span style={{fontWeight: 400}}>By supporting institutions expanding access to microcredit or establishing their own microcredit funds, firms could increase the availability of credit in the MENA region. Most refugees in MENA host countries have very little access to formal lending, leaving refugee reliant on informal loan schemes. There is a significant need for microcredit institutions that provide loans to refugees–Jordan and Lebanon only have one such institution each. Providing support as Orrick has done could expand credit access for refugees, leading to capital that could be used to start businesses or impact lives in other meaningful ways. </span></p>
        <p>&nbsp;</p>
        <p><span style={{fontWeight: 400}}>Lawyers could support host governments by offering technical assistance in formulating policies towards more inclusive financial sectors. The German development agency </span><a href="https://www.giz.de/en/worldwide/15967.html"><span style={{fontWeight: 400}}>Deutsche Gesellschaft für Internationale Zusammenarbeit</span></a><span style={{fontWeight: 400}}> (GIZ) recently wrapped up a seven year project in which Egypt, Jordan, and the Palestinian Territories received technical assistance in promoting microcredit. Still, in many MENA host countries, financial exclusion remains an issue for low-income populations, particularly refugees. At the policy level, microlending frameworks are a necessary precondition for the growth of formal credit access among refugees. Lawyers can certainly aid host governments in creating legal mechanisms to foster the growth of the microfinance industry and lending to refugees. </span></p>
      </div>
      </div>
    </div>
    <img id="image" src={meimage} alt="Image of Cash Transfer"/>
    </TabPanel>
    <TabPanel>
    <div className="text">
    <div id="rise">
    <div>
      <p><strong>Cash-based Assistance in Asia-Pacific</strong></p>
      <p><span style={{fontWeight: 400}}>The Asia-Pacific region is home to 3.3 million refugees, 1.9 million displaced people, and 1.4 million stateless people. The majority of the refugees originate from Afghanistan and Myanmar. Cash-based assistance plays a vital role in combating the refugee crisis throughout Asia and the Pacific. Cash aid enhances peaceful co-existence between refugees and host communities and reduces competition for a limited number of resources. They also enable families to become more self-reliant by encouraging savings, lending, and income generating activities. These programs not only provide vital funds to refugee families, allowing them purchase life-saving necessities, but they also help stimulate the local economies and small business in several severely depressed regions. Compared to voucher programs, which involve a smaller number of market actors, and therefore offer fewer benefits, unrestricted cash assistance benefits a large number of local traders, helping create a more sustainable economic solution.</span></p>
      <p><span style={{fontWeight: 400}}>International organizations operate active cash-based assistance programs in over 15 countries in the Asia-Pacific region. The program in Afghanistan ranks as one of the 10 largest cash transfer operations that the UNHCR operates in the world. Similarly, cash-based assistance has helped stabilize the refugee crisis as thousands of Rohingya flee systematic persecution in Myanmar. In Bangladesh, where three out of four refugees are women or children, cash assistance can reduce their protection risks, such as child exploitation, abuse, trafficking, food borrowing, or firewood gathering.</span></p>
      <p align="left"><br /><br /></p>
      <p><strong>Country Spotlight: Bangladesh</strong></p>
      <p><span style={{fontWeight: 400}}>The government and people of Bangladesh have been extraordinarily hospitable to refugees fleeing violence and hardships in their host countries. Specifically, Rohingya people have faced decades of systematic discrimination, statelessness, and targeted violence in Myanmar and have fled to Bangladesh. It is estimated that there are over 1 million refugees currently residing in Bangladesh, making it the largest refugee population in the Asia-Pacific region.</span></p>
      <p><span style={{fontWeight: 400}}>In Cox’s Bazar, the largest refugee settlement in the world, 80% of the Rohingya population relies on life-saving assistance. The cash transfers to refugees here enable Rohingya households to purchase essential goods at local stores and pay for services not covered by the standardized in-kind distribution or restricted e-vouchers. Furthermore, these cash grants boost the local economy of Cox’s Bazar and allow small and medium traders to grow their businesses and hire more laborers.</span></p>
      <p><span style={{fontWeight: 400}}>The Kutapolong camp within Cox’s Bazar settlement provides an excellent example of the impact of successful cash-bashed assistance in the region. The UNHCR, in coordination with the government of Bangladesh, BRAC, and the Bangladesh Red Crescent Society, has been actively delivering cash transfers to refugees in the settlement. Between April and May 2018 alone, 9,105 families received one-off payments of 2,500 Bangladesh taka (approximately 30 US dollars). This amount provided half of the monthly Minimum Expenditure Basket for a host family of five. Importantly, monitoring of the cash transfers revealed that the cash was safely received by the refugees. To learn more about cash assistance programs in Bangladesh, click </span><a href="https://www.unhcr.org/en-my/5b473fe87.pdf"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>.</span></p>
      <p align="left"><br /><br /></p>
      <p><strong>Modes of Delivery in Asia</strong></p>
      <p><span style={{fontWeight: 400}}>As more governments and organizations accept cash transfers as an effective means of delivering aid, attention is shifting to finding the best means of delivering money to refugees fleeing their home countries. Currently, it may take up to eight weeks for cash to reach affected families. This timeline can extend much longer to reach a significant scale. The speed at which cash reaches its intended recipients can have drastic impacts on their conditions. Delays in delivery may lead to harmful practices like reducing the size of meals, engaging in dangerous work, or selling assets. On the other hand, increasing the speed of cash deliveries can support the recovery of refugees and even make programs more cheaper to administer and more transparent to monitor.</span></p>
      <p><span style={{fontWeight: 400}}>While some cash-based assistance still occurs through physical transfer of money in Asia, there has been an increasing use of electronic transfers to recipients. These include mobile transfers and deposits to ATM cards that can be easily used in refugee camps throughout the region.</span></p>
      <p><span style={{fontWeight: 400}}>The International Rescue Committee has been piloting and testing an innovative cash delivery program in Asia. Its approach leverages a pre-existing database and a technology-enabled platform to identify people faster, streamline the paperwork, and to process payments to refugees. The payments are made digitally, using mobile money networks, to delivery cash to recipients. This model has cut delivery times in half and has shown the potential to greatly reduce the costs of cash transfers. A thorough report on the program’s deployment in Pakistan can be found </span><a href="https://www.rescue.org/sites/default/files/document/2181/cashrdbriefvfinal.pdf"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>.</span></p>
      <p align="left">&nbsp;</p>
      <p><strong>Ways to Get Involved in Cash Assistance</strong></p>
      <p><span style={{fontWeight: 400}}>There are several ways to get involved with cash assistance advocacy.</span><a href="http://www.cashlearning.org/about-us/overview"> <span style={{fontWeight: 400}}>The Cash Learning Partnership</span></a><span style={{fontWeight: 400}}> (CaLP) is a partnership of humanitarian actors engaged in cash and voucher assistance policy, practice, and research. CaLP operates as an advocacy partnership through serving as a means to learn, share knowledge, network, and coordinate policy and interventions. There are two ways to become involved in CaLP’s initiatives. </span></p>
      <p align="left">&nbsp;</p>
      <ul>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>First, CaLP considers application for</span><a href="http://www.cashlearning.org/membership/how-to-become-member"> <span style={{fontWeight: 400}}>Membership</span></a><span style={{fontWeight: 400}}> from interested parties, including academic institutions and private sector actors. Membership offers a means to provide technical guidance to Cash and Voucher Assistance (CVA) and engage with leaders in the field. </span></li>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>CaLP also has a</span><a href="http://www.cashlearning.org/about-us/technical-advisory-group-1"> <span style={{fontWeight: 400}}>Technical Advisory Group</span></a><span style={{fontWeight: 400}}>, which provides technical direction of the agency and provides guidance to the wider community of practice in CVA.</span></li>
      </ul>
      <p align="left">&nbsp;</p>
      <p><strong>Microfinance in Asia</strong></p>
      <p><span style={{fontWeight: 400}}>Microfinance programs have reached an inflection point in Asia. Most large and established microfinance institutions (MFI’s) have transformed into Small Finance Banks (SFBs) and have access to deposits and the ability to take on greater leverage. In India, for example, the seven SFBs account for 41% of the MFI lending sector and their loan portfolio exceeds $4bn. At the same time, financial technology is disrupting the industry using digital data and other technology. The advent of machine learning will continue to transform the industry, and many experts predict there will be significant consolidation amongst MFIs in Asia in the future.</span></p>
      <p><span style={{fontWeight: 400}}>Microfinance programs in Asia are increasingly gaining recognition and becoming an &nbsp;important source of funding for those who would otherwise be unable to access credit through traditional financial institutions. The state of the industry differs throughout the continent. For example, in countries such as Bangladesh, India, Philippines, and Indonesia, the industry is fairly mature and well-established. Meanwhile in other countries including China, Myanmar, Russia, and Laos, the sector is nascent and still growing.</span></p>
      <p><span style={{fontWeight: 400}}>Throughout Asia, there is significant room for the growth of the MFI industry. One indicator of the size of the microfinance industry is the ratio of microfinance loans to Gross Domestic Product. In all Asian countries, even those with more established microfinance industries, the ratio is extremely low. India and Bangladesh have two of the more saturated industries, yet there is still a need for increased penetration of MFIs.</span></p>
      <p><span style={{fontWeight: 400}}>One of the most significant challenges facing the microfinance sector in Asia is the lack of uniformity of regulations throughout the region. All of the countries have different regulators and varying frameworks for controlling and implementing microfinance programs. This presents a significant hurdle for larger institutions and any cooperation between countries. The create of a joint-committee in the region should provide a significant boost to the microfinance industry.</span></p>
      <p><span style={{fontWeight: 400}}>To learn more about microfinance in Asia, read a PWC report </span><a href="https://www.pwc.in/assets/pdfs/publications/2017/microfinance-in-asia-a-mosaic-future-outlook.pdf"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>, or find other country-specific articles </span><a href="https://www.aboutmicrofinance.com/latin-america-caribbean/asia"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>. For information on how to get involved in microfinance in Asia, click </span><a href="https://www.bankerswithoutborders.com/content/what-expect"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}> or </span><a href="https://www.ifc.org/wps/wcm/connect/region__ext_content/IFC_External_Corporate_Site/East+Asia+and+the+Pacific"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>.</span></p>
    </div>
    </div>
    </div>
    <img id="image" src={asiaimage} alt="Image of Cash Transfer"/>

    </TabPanel>

    <TabPanel>
    <div className="text">
    <div id="rise">
    <div>
      <p><strong>Cash-Based Assistance in Europe</strong></p>
      <p><span style={{fontWeight: 400}}>Over the past two decades, Europe has seen a significant influx of refugees and asylum-seekers as violence, food shortage, and other emergencies have heightened in North Africa and the Middle East. Many of these migrants have come through two main entryways: through Turkey or via sea, landing in Greece or the Balkans before dispersing throughout Europe. As such, parts of Europe have a fairly well-developed and successful cash-based assistance regime despite many countries’ unwillingness to accept refugees.</span></p>
      <p><span style={{fontWeight: 400}}>Greece has one of the more successful cash-assistance programs in Europe. Called the Greece Cash Alliance, a partnership of six organizations delivers unrestricted cash grants to refugees and asylum-seekers using proprietary debit cards. This program has been praised by many. In contrast, the cash transfer infrastructure in Turkey is much more limited. In particular, Ankara’s data protection laws make it especially difficult to track and monitor the success of cash transfers. For example, the European Commission has been unable to trace €1bn it spent in 2018 on two humanitarian programs designed to provide cash assistance to Syrian refugees. Auditors have doubts about the money’s final destination given the Turkish government’s refusal to provide access to documents. Given the significant number of refugees entering Turkey from Syria and other parts of the Middle East, these legal and regulatory issues are critical to the success of cash transfer programs in the country. To read a report by the European Court of Auditors on cash transfers and donations to humanitarian aid in Turkey, click </span><a href="http://publications.europa.eu/webpub/eca/special-reports/refugees-turkey-27-2018/en/"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>. </span></p>
      <p><span style={{fontWeight: 400}}>One area in which Europe is significantly lacking is private sponsorship programs for refugees. Private sponsorship allows individuals or community groups to lend their assistance to refugees, primarily through financial support. Over three quarters of the refugees admitted in Europe under financial sponsorship programs over the past six years were admitted by one country: Germany. A more sophisticated, effective, and widely-accepted private sponsorship program throughout the continent will likely require the leadership and support of the European Union. Read a report on private sponsorship of refugees </span><a href="https://publications.europa.eu/en/publication-detail/-/publication/1dbb0873-d349-11e8-9424-01aa75ed71a1/language-en/format-PDF/source-77978210"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>.</span></p>
      <p><br /><br /></p>
      <p><strong>The Greece Cash Alliance</strong></p>
      <p><span style={{fontWeight: 400}}>As Greece was faced with a significant surge of refugees and other migrants flooding in from North Africa, the UNHCR partnered with five NGOs to create the Greece Cash Alliance (GCA). These NGOs include Catholic Relief Services, the International Rescue Committee, Mercy Corps, the International Federation of the Red Cross, and Samaritan’s Purse. The GCA was established to harmonize the provision of cash assistance to refugees and asylum-seekers throughout the country. The cash transfers are delivered using the UNHCR Greece Cash Alliance card. The program also tries to utilize the unique capabilities of all of its partners.</span></p>
      <p><span style={{fontWeight: 400}}>The Greece Cash Alliance may serve as a model for effective cash-based assistance programs in other countries. The Greek Ministry of Migration Policy sets a standardized eligibility criteria for those seeking to receive funds. It also uses a single database of refugees and asylum-seekers whose records are updated on a monthly basis to prevent duplication and fraud while still ensuring it captures all eligible beneficiaries in a population with significant movement. Furthermore, the program uses a single financial service provider and a single bank card to streamline the process of cash transfers. There is a standardized amount of cash assistance provided based on family size and aid type as well as a single monitoring network that regularly provides results and updates to the administrators. Lastly, there is both a shared helpline and joint communication materials and initiatives in eight languages, making the program accessible to refugees from many backgrounds.</span></p>
      <p><span style={{fontWeight: 400}}>The impact of the Greece Cash Alliance has been significant. In one month alone, the GCA provided cash assistance to 33,000 refugees and asylum-seekers. In 2017, the program transferred over €50m to families in need. As of recent, the GCA has reached 100% of eligible beneficiaries at formal sites across Greece, providing families with essential non-restricted cash grants.</span></p>
      <p><span style={{fontWeight: 400}}>Read more about the Greece Cash Alliance </span><a href="https://www.unhcr.org/5a14306a7.pdf"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}> or </span><a href="http://www.cashlearning.org/downloads/resources/casestudies/calp-greece-case-study-web.pdf"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>.</span></p>
      <p><br /><br /></p>
      <p><strong>Ways to Get Involved in Europe</strong></p>
      <p><span style={{fontWeight: 400}}>There are several ways to get involved with cash assistance advocacy.</span><a href="http://www.cashlearning.org/about-us/overview"> <span style={{fontWeight: 400}}>The Cash Learning Partnership</span></a><span style={{fontWeight: 400}}> (CaLP) is a partnership of humanitarian actors engaged in cash and voucher assistance policy, practice, and research. CaLP operates as an advocacy partnership through serving as a means to learn, share knowledge, network, and coordinate policy and interventions. There are two ways to become involved in CaLP’s initiatives. </span></p>
      <p>&nbsp;</p>
      <ul>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>First, CaLP considers application for</span><a href="http://www.cashlearning.org/membership/how-to-become-member"> <span style={{fontWeight: 400}}>Membership</span></a><span style={{fontWeight: 400}}> from interested parties, including academic institutions and private sector actors. Membership offers a means to provide technical guidance to Cash and Voucher Assistance (CVA) and engage with leaders in the field. </span></li>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>CaLP also has a</span><a href="http://www.cashlearning.org/about-us/technical-advisory-group-1"> <span style={{fontWeight: 400}}>Technical Advisory Group</span></a><span style={{fontWeight: 400}}>, which provides technical direction of the agency and provides guidance to the wider community of practice in CVA.</span></li>
      </ul>
      <p>&nbsp;</p>
      <p><strong>Microfinance in Europe</strong></p>
      <p><span style={{fontWeight: 400}}>In recent years, Europe has faced an economic crisis and growing inequality that has made microfinance an important policy tool to combat social and financial exclusion, promote self-employment, and support small businesses. It has a particular impact in this region given the mature state of the financial services industry and wealth that many residents have compared to poor conditions in which many refugees live. The microfinance sector has been expanding at a breakneck pace recently. The industry has shown double digit growth in single years and has reached more than a 50% growth rate over a period of four years. A significant majority of these loans are made to businesses, with exclusively personal microloans constituting only 16% of the total microloan portfolio. Nonetheless, there is still a tremendous unmet demand for microloans throughout the continent.</span></p>
      <p><span style={{fontWeight: 400}}>The terms and conditions of the microfinance industry in Europe vary greatly between countries. For example, in Poland, Finland, and France, the average annual interest rate for microloans stands at 3%. In contrast, the annual rate for loans in Serbia averages 28%. Furthermore, microfinance institutions target different debtors in different countries. One indicator of a client’s wealth is average loan size to GDP per capita. In some of the more well-developed nations, like Germany (6%), France (11%), Switzerland (12%), and the United Kingdom (16%), institutions target the poorest citizens while in many less-developed Central European countries, these loans are extended more to the country’s middle class with average loan size to GDP per capita exceeding 100%. Many refugees live in the less affluent countries, so extended loans to the poorer segment of the population in these areas will be crucial to aiding refugees trying to build sustainable businesses and livelihoods.</span></p>
      <p><span style={{fontWeight: 400}}>One significant feature of the microfinance infrastructure in Europe is the coordination amongst institutions in different countries. Although lenders face different challenges and target different clients, there are strong lines of communication and significant collaboration amongst organizations. The European Microfinance Network is the clearest example of this. With over 100 members from throughout the continent, the organization engages in advocacy runs a helpdesk and webinars, facilitates peer-to-peer visits, and conducts working groups and an annual conference. This collaboration and information sharing has allowed the lenders to operate more effectively and efficiently. To learn more about the European Microfinance Network, click </span><a href="https://www.european-microfinance.org/activities"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>. To get involved in microfinance in Europe, click </span><a href="https://www.european-microfinance.org/members/grid"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}> or </span><a href="https://www.ifc.org/wps/wcm/connect/REGION__EXT_Content/IFC_External_Corporate_Site/Europe+and+Central+Asia"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>.</span></p>
    </div>
    </div>
    </div>
    <img id="image" src={eurimage} alt="Image of Cash Transfer"/>

    </TabPanel>

    <TabPanel>
    <div className="text">
    <div id="rise">
    <div>
      <p><strong>Cash-Based Assistance in the Americas</strong></p>
      <p><span style={{fontWeight: 400}}>Latin America’s has a long history of cash transfer programs to deliver aid to both refugees and the poor. More than two decades ago, Mexico and Brazil began to change their approach to poverty reduction. Instead of transferring income to families living in poverty through price subsidies, vouchers, or the direct distribution of food, these governments began to deliver aid through direct cash transfers. These transfers, however, were conditioned on household investments in human capital, like children’s health, nutrition, and education, to ensure that the payments would not be needed on a permanent basis and to promote a more sustainable lifestyle for refugees and the poor. Since then, this model of aid has spread throughout all of Latin America and the Caribbean.</span></p>
      <p><span style={{fontWeight: 400}}>As crises have become exacerbated in several countries, including Venezuela, Ecuador, and El Salvador, the UNHCR has significantly increased its involvement in the region. In 2017, the organization provided cash-based assistance to 25,000 refugees and asylum-seekers living in extreme poverty and at heightened risk in Central America, Costa Rica, Ecuador, Haiti, and Mexico. Additionally, more than 1,700 refugees received cash in Argentina and Costa Rica that year to help them a business or another livelihood activity. The UNHCR also assisted people in concern in Ecuador and Venezuela to access banking services. The scope of this operations, however, still remains limited compared to those in other regions of the world. For reference, none of the UNHCR’s largest cash transfer programs is located in the Americas. In fact, the Americas region represents just 2% of the UNHCR’s budget.</span></p>
      <p><span style={{fontWeight: 400}}>Cash transfer programs have and will become increasingly important in the region going forward. Certain areas have seen as much as a tenfold increase in the number of refugees over the last five years. In order to combat this crisis, increased funding will need to be funneled into the region and governments and private actors will have transition restricted cash grants to more unconditional cash transfers like those used more frequently in other parts of the world. To read more about the UNHCR’s recommendations for the region, click </span><a href="https://www.unhcr.org/en-us/publications/fundraising/5a0bfff07/unhcr-global-appeal-2018-2019-americas.html"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>.</span></p>
      <p>&nbsp;</p>
      <p><strong>Refugee Cash Assistance in the United States</strong></p>
      <p><span style={{fontWeight: 400}}>The United States government runs a program to provide refugees with cash assistance during their first eight months in the country called the Refugee Cash Assistance (RCA) Program. It is coordinated in conjunction with the Refugee Medical Assistance Program which also provides medical services to those individuals. To be eligible to receive cash transfers through the RCA, beneficiaries must be refugees, asylees or meet one of several other possible statuses. Additionally, there are work and training as well as income requirements for eligibility. Application materials are available in 12 different languages, making the program accessible to people from around the globe. The benefits take the form of unrestricted cash transfers, allowing refugees to attend to their most pressing needs.</span></p>
      <p><span style={{fontWeight: 400}}>Overall, the RCA has been successful in helping refugees begin life in the United States. The program still has some issues, however. Many note that government agencies that serve the general public do not have the specialized knowledge to adequately aid refugee populations. This has led for some to call for increased collaboration between the government and independent organizations. Furthermore, the short eight-month duration of the cash transfers requires refugee families to find work quickly. This may force some refugees into extremely low-paying jobs or situations in which they may be exploited. Refugees also report that benefit levels are low for what they require to live sustainably in the United States. To read a report on the RCA and how it might be improved, click </span><a href="https://www.dshs.wa.gov/esa/community-services-offices/refugee-cash-assistance"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>.</span></p>
      <p><span style={{fontWeight: 400}}>To learn more about or apply for the Refugee Cash Assistance program in the United States, click </span><a href="https://www.dshs.wa.gov/esa/community-services-offices/refugee-cash-assistance"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>.</span></p>
      <p>&nbsp;</p>
      <p><strong>Ways to Get Involved in the Americas</strong></p>
      <p><span style={{fontWeight: 400}}>There are several ways to get involved with cash assistance advocacy.</span><a href="http://www.cashlearning.org/about-us/overview"> <span style={{fontWeight: 400}}>The Cash Learning Partnership</span></a><span style={{fontWeight: 400}}> (CaLP) is a partnership of humanitarian actors engaged in cash and voucher assistance policy, practice, and research. CaLP operates as an advocacy partnership through serving as a means to learn, share knowledge, network, and coordinate policy and interventions. There are two ways to become involved in CaLP’s initiatives. </span></p>
      <ul>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>First, CaLP considers application for</span><a href="http://www.cashlearning.org/membership/how-to-become-member"> <span style={{fontWeight: 400}}>Membership</span></a><span style={{fontWeight: 400}}> from interested parties, including academic institutions and private sector actors. Membership offers a means to provide technical guidance to Cash and Voucher Assistance (CVA) and engage with leaders in the field. </span></li>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>CaLP also has a</span><a href="http://www.cashlearning.org/about-us/technical-advisory-group-1"> <span style={{fontWeight: 400}}>Technical Advisory Group</span></a><span style={{fontWeight: 400}}>, which provides technical direction of the agency and provides guidance to the wider community of practice in CVA.</span></li>
      </ul>
      <p><span style={{fontWeight: 400}}>Additionally, in response to the severe crisis in Venezuela, the UNHCR has established a special donation for people looking to contribute to their efforts in the country. To donate, click </span><a href="https://www.unhcr.org/venezuela-emergency.html"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>.</span></p>
      <p>&nbsp;</p>
      <p><strong>Microfinance in the Americas</strong></p>
      <p><span style={{fontWeight: 400}}>Microfinance institutions have a fairly significant footprint throughout Latin America and the Caribbean. Roughly 600 institutions have made around $12bn in loans to 10 million low-income clients. Despite the industry’s considerable growth over the past decade, microfinance is available to about one in six potential creditors in Latin America and the Caribbean. Penetration rates, however, vary from country to country, largely depending on how mature the microfinance industry is in that country. In those countries with the longest experience with microfinance, like Bolivia or El Salvador, as many as one in three potential clients as served by microfinance institutions. Conversely in countries with less developed microfinance industries, such as Argentina or Venezuela, less than one in 20 potential clients have access to microloans. </span></p>
      <p><span style={{fontWeight: 400}}>The Inter-American Development Bank (IDB), coordinates and organizes much of the &nbsp;microfinance activity in the region. It holds an annual conference that draws over 1,200 participants from 38 countries throughout the Americas. This conference and other efforts allow microfinance institutions to collaborate and share innovative strategies and best practices. The IDB also operates the Multilateral Investment Fund (MIF) which has underwritten the expansion of leading microfinance networks and enabled many of the innovations that have led to developments in the dynamic microfinance industry. Although MIF does not invest directly in businesses themselves, it does use a variety of financial instruments to promote microfinance in the region. These include direct and indirect investment as well as grants and loans into microfinance lenders. MIF also conducts research and analysis on the state of the microfinance industry in the Americas.</span></p>
      <p><span style={{fontWeight: 400}}>To learn more about the Multilateral Investment Fund, click </span><a href="https://www.iadb.org/en/topics/microfinance/microfinance-latin-america-and-caribbean"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>. If you are interested in becoming involved in microfinance initiatives in the United States, click </span><a href="https://www.iadb.org/en/partnership/partnerships-idb"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}> or </span><a href="https://www.ifc.org/wps/wcm/connect/region__ext_content/IFC_External_Corporate_Site/latin+america+and+the+caribbean"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>.</span></p>
    </div>
    </div>
    </div>
    <img id="image" src={americaimage} alt="Image of Cash Transfer"/>

    </TabPanel>

    <TabPanel>
    <div className="text">
    <div id="rise">
    <div>
      <p><strong>Cash-Based Assistance in Africa</strong></p>
      <p><span style={{fontWeight: 400}}>With a substantial number of refugees throughout the continent, UNHCR and other organizations have significant cash-assistance operations in Africa. The cash transfer program in Somalia is one of the agency’s 10 largest in the world, and it has sizeable activity in several other countries. Drought, famine, disease, civil war, and other forms of violence have all contributed to the displacement of hundreds of thousands of individuals from various areas. Cash-based assistance is one of the preferable responses to these challenges because it helps refugees meet their immediate needs and also reduces the risks of rights violations. Additionally, it gives refugees the dignity and autonomy to choose where the money should &nbsp;be spent and to meet their most urgent needs. </span></p>
      <p>&nbsp;</p>
      <p><span style={{fontWeight: 400}}>In the Democratic Republic of Congo, for example, UNHCR increased the scale of its cash assistance operations, distributing cash payments to over 25,000 refugees and internally displaced people in 2018. With these funds, recipients were able to build their own shelters and latrines, enroll children in school, and buy essential supplies. In a country where 83% of affected individuals are women, these cash payments provide critical assistance in a manner with less possibility of rights violations. To distribute the money, UNHCR distributes a mobile phone and SIM card to each family and facilitates the opening of mobile money accounts. This allows not only for secure fund transfers but also allows refugees to communicate with families and friends. Such a program increases integration into the region and boosts the local economy. </span></p>
      <p><span style={{fontWeight: 400}}>To learn more about cash transfers in Africa, </span><a href="https://www.womensrefugeecommission.org/component/zdocs/document/.../1542"><span style={{fontWeight: 400}}>click</span></a><span style={{fontWeight: 400}}> here or </span><a href="https://www.unhcr.org/afr/news/press/2018/10/5bc03ae04/unhcr-steps-up-cash-assistance-for-refugees-and-displaced-in-the-drc.html"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>. </span></p>
      <p>&nbsp;</p>
      <p><strong>Country Spotlight: Kenya</strong></p>
      <p><span style={{fontWeight: 400}}>Cash transfers in Kenya offer an excellent example of the advantages and effectiveness of cash-based assistance compared to other traditional forms of aid. UNHCR runs a program called Cash for Shelter which targets refugees living in the newly-established Kalobeyei settlement in Turkana County. It is the most ambitious cash for shelter program organized by UNHCR to date. The UN Refugee Agency provides cash payments to refugees as they build permanent shelters in the camp. The refugees build compounds of roughly a dozen shelters in an average of 22 days at a cost that is 11-14% lower than that of implementing partners. This allows refugees to spend the remaining funds on home improvements and other basic needs.</span></p>
      <p><span style={{fontWeight: 400}}> The cash for shelter program in Kenya addresses two critical needs of refugees: it ensures safe and dignified housing while also reducing dependence on humanitarian assistance. Furthermore, it benefits the local economy and improves social co-existence. Cash payments are only made upon timely completion of each building phase, so the program also ensures accountability. As of the end of 2018, the program had provided shelter for over 800 families through the transfer of over $1.5 million. It represents a significant paradigm shift from the traditional refugee camp planning process and allows refugees to transition to more durable solutions, such as integration into the host country.</span></p>
      <p><span style={{fontWeight: 400}}>To learn more about the Cash for Shelter program in Kenya, click </span><a href="https://www.unhcr.org/en-us/5c487dde4"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>. </span></p>
      <p>&nbsp;</p>
      <p><strong>How to Get Involved In Africa</strong></p>
      <p><span style={{fontWeight: 400}}>There are several ways to get involved with cash assistance advocacy.</span><a href="http://www.cashlearning.org/about-us/overview"> <span style={{fontWeight: 400}}>The Cash Learning Partnership</span></a><span style={{fontWeight: 400}}> (CaLP) is a partnership of humanitarian actors engaged in cash and voucher assistance policy, practice, and research. CaLP operates as an advocacy partnership through serving as a means to learn, share knowledge, network, and coordinate policy and interventions. There are two ways to become involved in CaLP’s initiatives. </span></p>
      <ul>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>First, CaLP considers application for</span><a href="http://www.cashlearning.org/membership/how-to-become-member"> <span style={{fontWeight: 400}}>Membership</span></a><span style={{fontWeight: 400}}> from interested parties, including academic institutions and private sector actors. Membership offers a means to provide technical guidance to Cash and Voucher Assistance (CVA) and engage with leaders in the field. </span></li>
        <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>CaLP also has a</span><a href="http://www.cashlearning.org/about-us/technical-advisory-group-1"> <span style={{fontWeight: 400}}>Technical Advisory Group</span></a><span style={{fontWeight: 400}}>, which provides technical direction of the agency and provides guidance to the wider community of practice in CVA.</span></li>
      </ul>
      <p><strong>Microfinance in Africa</strong></p>
      <p><span style={{fontWeight: 400}}>Between 2000 and 2010, Africa achieved an average annual GDP growth rate of 5.4%. Though the country remains significantly underdeveloped, this significant growth and auspicious trajectory attracted the attention of many investors and financial institutions. As such, the microfinance industry in Africa &nbsp;ge</span></p>
      <p><span style={{fontWeight: 400}}>To learn more about microfinance in Africa, click </span><a href="https://borgenproject.org/benefits-of-microfinance-institutions-in-africa/"><span style={{fontWeight: 400}}>here</span></a><span style={{fontWeight: 400}}>.</span></p>
    </div>
    </div>
    </div>
    <img id="image" src={africa} alt="Image of Cash Transfer"/>

    </TabPanel>

  </Tabs>
  </div>
)}

function InteractiveMap() {

  {/* A JSX comment

  function clickToFeature(feature){
    if (feature.properties && feature.properties.name) {
      return $('#sidebar').append("<div id='locale'>"+feature.properties.name+"</div>")
    }
  }

  function onEachFeature(feature, layer){
    layer.on({
      click: this.clickToFeature
    });
    }

    */}



    function onEachFeature(feature, layer) {
      if (feature.properties && feature.properties.name && programs[feature.properties.name]) {

        var buffer = ''
        var progArray = programs[feature.properties.name]
          for (var i = 0; i < progArray.length; i++) {
            var item = progArray[i];

            if(item.Website != ""){
              buffer += " <li><a href=" + item.Website + ">" + item.Name + "</a><ul>";
            }else{
              buffer += " <li>" + item.Name + "<ul>";
            }

            if(item.Affiliations != ""){
              buffer+="<li>Affiliations : " + item.Affiliations + "</li>"
            }
            if (item.Services != "") {
              buffer+="<li>Services : " + item.Services + "</li>"

            }
            buffer+="</ul></li>"
          }


        // specify popup options
        var customOptions =
            {
            'className' : 'custom'
            }

        layer.bindPopup(feature.properties.name+"<ul>"+buffer+"</ul>",customOptions);
      }
    }

    function featureFilter(feature){
      if (programs.hasOwnProperty(feature.properties.name)){
        return true
      }
    }

  return (
    <div id="tabpage">
    <Tabs>
    <TabList>
      <Tab><h3>Interactive Map</h3></Tab>
      <Tab><h3>Table of Programs</h3></Tab>
    </TabList>

    <TabPanel>
    <div>
    <Map id="map" center={[10.0, -0.0]} zoom={3}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <GeoJSON data={countries} onEachFeature={onEachFeature} filter={featureFilter}/>
    </Map>
    </div>
    </TabPanel>

    <TabPanel>
    <div id= "table-container">
    <div id= "table">
  <h2><strong>Middle East and North Africa</strong></h2>
  <p>&nbsp;</p>
  <table style={{width: '1028px'}} cellSpacing={0} cellPadding={7}>
    <tbody>
      <tr valign="top">
        <td style={{background: 'transparent', width: '80px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Name</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Affiliation(s)</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '300.054px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Services</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '158.946px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Countries Served</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '10px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Other Information</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '552px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Website</strong></span></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '80px'}}>
          <p><span style={{fontSize: '16px'}}>Norwegian Refugee Council</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>ECHO</span></p>
        </td>
        <td style={{background: 'transparent', width: '300.054px'}}>
          <p><span style={{fontSize: '16px'}}>Cash transfers; vouchers</span></p>
        </td>
        <td style={{background: 'transparent', width: '158.946px'}}>
          <p><a href="https://www.nrc.no/news/2018/december/giving-warmth-during-winter/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Jordan</u></span></span></a><span style={{fontSize: '16px'}}>, Lebanon, </span><a href="https://www.nrc.no/news/2017/september/humanitarian-cash-assistance-provides-protection-for-afghans-in-iran/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Iran</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://www.nrc.no/expert-deployment/2016/2018/making-markets-work-in-a-crisis/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Yemen</u></span></span></a><span style={{fontSize: '16px'}}>, Palestine, Syria, </span><a href="https://www.nrc.no/news/2016/august/cash-distribution-in-iraq/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Iraq</u></span></span></a></p>
        </td>
        <td style={{background: 'transparent', width: '10px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '552px'}}>
          <p><a href="https://www.nrc.no/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.nrc.no/</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '80px'}}>
          <p><span style={{fontSize: '16px'}}>UNHCR</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '300.054px'}}>
          <p><span style={{fontSize: '16px'}}>Conditional and unconditional cash transfers</span></p>
        </td>
        <td style={{background: 'transparent', width: '158.946px'}}>
          <p><span style={{fontSize: '16px'}}>Jordan, Lebanon, Syria, Iraq, Saudi Arabia, UAE, Yemen, Egypt, Libya, Tunisia, Algeria, Morocco, Sudan</span></p>
        </td>
        <td style={{background: 'transparent', width: '10px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '552px'}}>
          <p><a href="https://www.unhcr.org/middle-east-and-north-africa.html"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.unhcr.org/middle-east-and-north-africa.html</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '80px'}}>
          <p><span style={{fontSize: '16px'}}>UNICEF</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>UNHCR, World Food Program</span></p>
        </td>
        <td style={{background: 'transparent', width: '300.054px'}}>
          <p><span style={{fontSize: '16px'}}>Conditional cash transfers</span></p>
        </td>
        <td style={{background: 'transparent', width: '158.946px'}}>
          <p><a href="https://www.unicefusa.org/stories/cash-transfers-safety-net-refugee-families-crisis/34000"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Lebanon</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://www.unicef.org/stories/innovative-cash-transfer-programme-supports-syrian-children-disabilities"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Syria</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://www.unicef.org/stories/cash-assistance-helps-syrian-children-in-iraq-education"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Iraq</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://www.unicef.org/stories/unconditional-cash-grants-are-lifeline-for-mother-yemen"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Yemen</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://www.unicef.org/jordan/social-protection"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Jordan</u></span></span></a></p>
        </td>
        <td style={{background: 'transparent', width: '10px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '552px'}}>
          <p><a href="https://www.unicef.org/mena/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.unicef.org/mena/</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '80px'}}>
          <p><span style={{fontSize: '16px'}}>Mercy Corps</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '300.054px'}}>
          <p><a href="https://www.mercycorps.org/articles/how-were-investing-entrepreneurs-improve-lives-around-world"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Social Venture Fund</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://www.mercycorps.org/articles/greece/quick-facts-what-you-need-know-about-cash-aid"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Cash Transfers</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://www.mercycorps.org/sites/default/files/Mobile%20Wallet_Increased%20Accessibility%20Reduced%20Visibility_0.pdf"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Mobile cash delivery system</u></span></span></a></p>
        </td>
        <td style={{background: 'transparent', width: '158.946px'}}>
          <p><a href="https://www.mercycorps.org/countries/iraq"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Iraq</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://www.mercycorps.org/countries/jordan"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Jordan</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://www.mercycorps.org/countries/lebanon"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Lebanon</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://www.mercycorps.org/countries/libya"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Libya</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://www.mercycorps.org/countries/palestine-west-bank-gaza"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Palestine</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://www.mercycorps.org/countries/sudan"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Sudan</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://www.mercycorps.org/countries/syria"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Syria</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://www.mercycorps.org/countries/tunisia"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Tunisia</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://www.mercycorps.org/countries/yemen"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Yemen</u></span></span></a></p>
        </td>
        <td style={{background: 'transparent', width: '10px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '552px'}}>
          <p><a href="https://www.mercycorps.org/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.mercycorps.org/</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '80px'}}>
          <p><span style={{fontSize: '16px'}}>The Department for International Development (DFID), United Kingdom</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{color: '#222222'}}><span style={{fontSize: '16px'}}>World Bank, UNICEF, Palladium International, CARE, OxFam</span></span></p>
        </td>
        <td style={{background: 'transparent', width: '300.054px'}}>
          <p><span style={{fontSize: '16px'}}>Funds public sector development initiatives, including cash assistance and voucher programs.</span></p>
        </td>
        <td style={{background: 'transparent', width: '158.946px'}}>
          <p><span style={{fontSize: '16px'}}>Jordan, </span><a href="https://devtracker.dfid.gov.uk/projects/GB-1-205094"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Iraq</u></span></span></a><span style={{fontSize: '16px'}}>, </span><a href="https://devtracker.dfid.gov.uk/projects/GB-GOV-1-300231"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Lebanon</u></span></span></a><span style={{fontSize: '16px'}}>, Syria, </span><a href="https://devtracker.dfid.gov.uk/projects/GB-GOV-1-300046"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>Yemen</u></span></span></a></p>
        </td>
        <td style={{background: 'transparent', width: '10px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '552px'}}>
          <p><a href="https://www.gov.uk/government/organisations/department-for-international-development"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.gov.uk/government/organisations/department-for-international-development</u></span></span></a></p>
        </td>
      </tr>
    </tbody>
  </table>
  <p>&nbsp;</p>
  <h2><strong>Africa</strong></h2>
  <p>&nbsp;</p>
  <table style={{width: '1137px'}} cellSpacing={0} cellPadding={7}>
    <tbody>
      <tr valign="top">
        <td style={{background: 'transparent', width: '82px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Name</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Affiliation(s)</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '154px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Services</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '68px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Countries Served</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '223.369px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Other Information</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '423.631px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Website</strong></span></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '82px'}}>
          <p><span style={{fontSize: '16px'}}>Alternative Responses For Communities in Crisis</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>UNICEF; UK-AID</span></p>
        </td>
        <td style={{background: 'transparent', width: '154px'}}>
          <p><span style={{fontSize: '16px'}}>Monthly UCT of $110 - 135 per household; <br /> $225 for extremely vulnerable households</span></p>
        </td>
        <td style={{background: 'transparent', width: '68px'}}>
          <p><span style={{fontSize: '16px'}}>Democratic Republic of Congo</span></p>
        </td>
        <td style={{background: 'transparent', width: '223.369px'}}>
          <p><span style={{fontSize: '16px'}}>For displaced families, host families, and returning displaced families in Eastern DRC</span></p>
        </td>
        <td style={{background: 'transparent', width: '423.631px'}}>
          <p><a href="http://www.cashlearning.org/news-and-events/news-and-events/post/223-unicefas-alternative-responses-for-communities-in-crisis-arcc-programme-a-the-largest-humanitarian-multi-purpose-unconditional-cash-transfer-program-in-the-drc"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>http://www.cashlearning.org/news-and-events/news-and-events/post/223-unicefas-alternative-responses-for-communities-in-crisis-arcc-programme-a-the-largest-humanitarian-multi-purpose-unconditional-cash-transfer-program-in-the-drc</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '82px'}}>
          <p><span style={{fontSize: '16px'}}>Emergency Cash Transfer Project</span></p>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>ChildFund</span></p>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '154px'}}>
          <p><span style={{fontSize: '16px'}}>Unconditional Cash Transfers for Affected Households; Mobile Money Cash Transfer</span></p>
        </td>
        <td style={{background: 'transparent', width: '68px'}}>
          <p><span style={{fontSize: '16px'}}>Gambia</span></p>
        </td>
        <td style={{background: 'transparent', width: '223.369px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '423.631px'}}>
          <p><span style={{color: '#0000ff'}}><u><a href="http://www.cashlearning.org/downloads/user-submitted-resources/2018/07/1530737717.ChildFund-MMCT-Assessment-063018.pdf"><span style={{fontSize: '16px'}}>http://www.cashlearning.org/downloads/user-submitted-resources/2018/07/1530737717.ChildFund-MMCT-Assessment-063018.pdf </span></a></u></span></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '82px'}}>
          <p><span style={{fontSize: '16px'}}>Emergency Food and Cash Assistance</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>World Food Program</span></p>
        </td>
        <td style={{background: 'transparent', width: '154px'}}>
          <p><span style={{fontSize: '16px'}}>Food and cash support</span></p>
        </td>
        <td style={{background: 'transparent', width: '68px'}}>
          <p><span style={{fontSize: '16px'}}>Angola</span></p>
        </td>
        <td style={{background: 'transparent', width: '223.369px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '423.631px'}}>
          <p><span style={{color: '#0000ff'}}><u><a href="https://www1.wfp.org/operations/201083-emergency-food-assistance-angola-conflict-affected-refugees"><span style={{fontSize: '16px'}}>https://www1.wfp.org/operations/201083-emergency-food-assistance-angola-conflict-affected-refugees </span></a></u></span></p>
          <p align="center">&nbsp;</p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '82px'}}>
          <p><span style={{fontSize: '16px'}}>Food Assistance for Assets</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>World Food Program</span></p>
        </td>
        <td style={{background: 'transparent', width: '154px'}}>
          <p><span style={{fontSize: '16px'}}>Food and/or cash-based </span></p>
          <p><span style={{fontSize: '16px'}}>transfers</span></p>
        </td>
        <td style={{background: 'transparent', width: '68px'}}>
          <p><span style={{fontSize: '16px'}}>Kenya, Niger, Zimbabwe</span></p>
        </td>
        <td style={{background: 'transparent', width: '223.369px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '423.631px'}}>
          <p><span style={{color: '#0000ff'}}><u><a href="https://www1.wfp.org/food-assistance-for-assets"><span style={{fontSize: '16px'}}>https://www1.wfp.org/food-assistance-for-assets</span></a></u></span></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '82px'}}>
          <p><span style={{fontSize: '16px'}}>Food For Peace: Emergency Food Assistance Program</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>USAID; UN</span></p>
        </td>
        <td style={{background: 'transparent', width: '154px'}}>
          <p><span style={{fontSize: '16px'}}>Food and cash support</span></p>
        </td>
        <td style={{background: 'transparent', width: '68px'}}>
          <p><span style={{fontSize: '16px'}}>Senegal, Sierra Leone</span></p>
        </td>
        <td style={{background: 'transparent', width: '223.369px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '423.631px'}}>
          <p><span style={{color: '#0000ff'}}><u><a href="http://www.cashlearning.org/downloads/resources/casestudies/socialprotectionsenegalen.pdf"><span style={{fontSize: '16px'}}>http://www.cashlearning.org/downloads/resources/casestudies/socialprotectionsenegalen.pdf</span></a></u></span></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '82px'}}>
          <p><span style={{fontSize: '16px'}}>GiveDirectly: large cash transfers to refugees</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>UK- AID, Comic Relief, IKEA Foundation</span></p>
        </td>
        <td style={{background: 'transparent', width: '154px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '68px'}}>
          <p><span style={{fontSize: '16px'}}>Uganda</span></p>
        </td>
        <td style={{background: 'transparent', width: '223.369px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '423.631px'}}>
          <p><span style={{color: '#0000ff'}}><u><a href="https://givedirectly.org/pdf/CashTransfersToRefugeeCommunitiesWhitePaper.pdf"><span style={{fontSize: '16px'}}>https://givedirectly.org/pdf/CashTransfersToRefugeeCommunitiesWhitePaper.pdf</span></a></u></span></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '82px'}}>
          <p><span style={{fontSize: '16px'}}>Humanitarian cash assistance</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>The Cash Learning Partnership</span></p>
        </td>
        <td style={{background: 'transparent', width: '154px'}}>
          <p><span style={{fontSize: '16px'}}>Unconditional/Conditional Cash Transfer Support</span></p>
        </td>
        <td style={{background: 'transparent', width: '68px'}}>
          <p><span style={{fontSize: '16px'}}>Mali</span></p>
        </td>
        <td style={{background: 'transparent', width: '223.369px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '423.631px'}}>
          <p><span style={{color: '#0000ff'}}><u><a href="http://www.cashlearning.org/downloads/160818calp-mali-case-studyfinalenweb.pdf"><span style={{fontSize: '16px'}}>http://www.cashlearning.org/downloads/160818calp-mali-case-studyfinalenweb.pdf</span></a></u></span></p>
          <p>&nbsp;</p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '82px'}}>
          <p><span style={{fontSize: '16px'}}>Humanitarian cash assistance for refugees to national social safety nets (</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>UNHCR</span></p>
        </td>
        <td style={{background: 'transparent', width: '154px'}}>
          <p><span style={{fontSize: '16px'}}>Conditional and unconditional cash transfers</span></p>
        </td>
        <td style={{background: 'transparent', width: '68px'}}>
          <p><span style={{fontSize: '16px'}}>Niger, Nigeria</span></p>
        </td>
        <td style={{background: 'transparent', width: '223.369px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '423.631px'}}>
          <p><span style={{color: '#0000ff'}}><u><a href="https://www.unhcr.org/5cc011417"><span style={{fontSize: '16px'}}>https://www.unhcr.org/5cc011418</span></a></u></span></p>
          <p>&nbsp;</p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '82px'}}>
          <p><span style={{fontSize: '16px'}}>Integrated Nutrition Social Cash Transfer</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>UNICEF; Irish Aid</span></p>
        </td>
        <td style={{background: 'transparent', width: '154px'}}>
          <p><span style={{fontSize: '16px'}}>Monthly Cash Transfers</span></p>
        </td>
        <td style={{background: 'transparent', width: '68px'}}>
          <p><span style={{fontSize: '16px'}}>Ethiopia</span></p>
        </td>
        <td style={{background: 'transparent', width: '223.369px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '423.631px'}}>
          <p><span style={{color: '#0000ff'}}><u><a href="https://transfer.cpc.unc.edu/countries-2/ethiopia/"><span style={{fontSize: '16px'}}>https://transfer.cpc.unc.edu/countries-2/ethiopia/ </span></a></u></span></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '82px'}}>
          <p><span style={{fontSize: '16px'}}>Refugees and Host Communities Support Project (PARCA)</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>World Bank</span></p>
        </td>
        <td style={{background: 'transparent', width: '154px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '68px'}}>
          <p><span style={{fontSize: '16px'}}>Chad</span></p>
        </td>
        <td style={{background: 'transparent', width: '223.369px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '423.631px'}}>
          <p><span style={{color: '#0000ff'}}><u><a href="https://www.worldbank.org/en/news/press-release/2018/09/12/chad-a-60-million-world-bank-grant-to-support-refugees-and-host-communities"><span style={{fontSize: '16px'}}>https://www.worldbank.org/en/news/press-release/2018/09/12/chad-a-60-million-world-bank-grant-to-support-refugees-and-host-communities</span></a></u></span></p>
        </td>
      </tr>
    </tbody>
  </table>
  <p>&nbsp;</p>
  <h2><strong>Asia</strong></h2>
  <p>&nbsp;</p>
  <table style={{width: '1128px'}} cellSpacing={0} cellPadding={7}>
    <tbody>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Name</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Affiliation(s)</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '85px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Services</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '318px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Countries Served</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '283.75px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Other Information</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '362.25px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Website</strong></span></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p><span style={{fontSize: '16px'}}>Asia-Pacific Regional Cash Working Group*</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>OCHA, WFP, IFRC, CaLP</span></p>
        </td>
        <td style={{background: 'transparent', width: '85px'}}>
          <p><span style={{fontSize: '16px'}}>Bank, Mobile, Cash.Voucher</span></p>
        </td>
        <td style={{background: 'transparent', width: '318px'}}>
          <p><span style={{fontSize: '16px'}}>Afghanistan, Nepal, Vietnam, Phillippines, Cambodia, Indonesia, Myanmar, Bangladesh</span></p>
        </td>
        <td style={{background: 'transparent', width: '283.75px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '362.25px'}}>
          <p><a href="http://www.cashlearning.org/coordination/asia-regional-cash-working-group"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>http://www.cashlearning.org/coordination/asia-regional-cash-working-group</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p><span style={{fontSize: '16px'}}>Action Against Hunger</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>ACF International</span></p>
        </td>
        <td style={{background: 'transparent', width: '85px'}}>
          <p><span style={{fontSize: '16px'}}>Cash assistance in response to food emergencies</span></p>
        </td>
        <td style={{background: 'transparent', width: '318px'}}>
          <p><span style={{fontSize: '16px'}}>Afghanistan, Bangladesh, Cambodia, Georgia, India, Indonesia, Myanmar, Nepal, Pakistan, Philippines</span></p>
        </td>
        <td style={{background: 'transparent', width: '283.75px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '362.25px'}}>
          <p><a href="https://www.actionagainsthunger.org/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.actionagainsthunger.org</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p><span style={{fontSize: '16px'}}>Danish Church Aid</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '85px'}}>
          <p><span style={{fontSize: '16px'}}>Cash assistance</span></p>
        </td>
        <td style={{background: 'transparent', width: '318px'}}>
          <p><span style={{fontSize: '16px'}}>Nepal, Bangladesh, Myanmar, Cambodia</span></p>
        </td>
        <td style={{background: 'transparent', width: '283.75px'}}>
          <p><span style={{fontSize: '16px'}}>Multi-purpose Cash transfer programming is DCA’s preferred response methodology wherever possible. Since 2010 CTP has been a key strategic priority in our Humanitarian Action Policy and the majority of our programs now have a cash component.</span></p>
        </td>
        <td style={{background: 'transparent', width: '362.25px'}}>
          <p><a href="https://www.danchurchaid.org/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.danchurchaid.org</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p><span style={{fontSize: '16px'}}>Norwegian Refugee Council</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '85px'}}>
          <p><span style={{fontSize: '16px'}}>Cash assistance (conditional and unconditional)</span></p>
        </td>
        <td style={{background: 'transparent', width: '318px'}}>
          <p><span style={{fontSize: '16px'}}>Myanmar</span></p>
        </td>
        <td style={{background: 'transparent', width: '283.75px'}}>
          <p><span style={{fontSize: '16px'}}>NRC is interested in using cash and voucher programming as a modality across all these areas of programming and across all phases of refugee/displaced settings.</span></p>
        </td>
        <td style={{background: 'transparent', width: '362.25px'}}>
          <p><a href="https://www.nrc.no/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.nrc.no</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p><span style={{fontSize: '16px'}}>Oxfam</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '85px'}}>
          <p><span style={{fontSize: '16px'}}>Cash transfers</span></p>
        </td>
        <td style={{background: 'transparent', width: '318px'}}>
          <p><span style={{fontSize: '16px'}}>Afghanistan, Bangladesh, Cambodia, China, India, Myanmar, Pakistan, Philippines, Russia, Thailand, Vietnam</span></p>
        </td>
        <td style={{background: 'transparent', width: '283.75px'}}>
          <p><span style={{fontSize: '16px'}}>Cash transfer programming forms a significant part of Oxfam GB’s work in food insecurity, and is an emerging response mechanism in shelter and water and sanitation sectors.</span></p>
        </td>
        <td style={{background: 'transparent', width: '362.25px'}}>
          <p><a href="https://www.oxfamamerica.org/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.oxfamamerica.org</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p><span style={{fontSize: '16px'}}>UNHCR</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>United Nations</span></p>
        </td>
        <td style={{background: 'transparent', width: '85px'}}>
          <p><span style={{fontSize: '16px'}}>Conditional and unconditional cash transfers</span></p>
        </td>
        <td style={{background: 'transparent', width: '318px'}}>
          <p><span style={{fontSize: '16px'}}>Afghanistan, Bangladesh, China, India, Indonesia, Kazakhstan, Kyrgyzstan, Malaysia, Myanmar, Nepal, Pakistan,Philippines, Russia, South Korea, Sri Lanka, Tajikistan, Taiwan, Thailand</span></p>
        </td>
        <td style={{background: 'transparent', width: '283.75px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '362.25px'}}>
          <p><a href="https://www.unhcr.org/en-us/asia-and-the-pacific.html"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.unhcr.org/en-us/asia-and-the-pacific.html</u></span></span></a></p>
        </td>
      </tr>
    </tbody>
  </table>
  <p>&nbsp;</p>
  <h2><strong>Europe</strong></h2>
  <p>&nbsp;</p>
  <table style={{width: '1128px'}} cellSpacing={0} cellPadding={7}>
    <tbody>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Name</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Affiliation(s)</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '85px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Services</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '263.335px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Countries Served</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '253.665px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Other Information</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '289px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Website</strong></span></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p><span style={{fontSize: '16px'}}>Norwegian Refugee Council</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '85px'}}>
          <p><span style={{fontSize: '16px'}}>Cash assistance (conditional and unconditional)</span></p>
        </td>
        <td style={{background: 'transparent', width: '263.335px'}}>
          <p><span style={{fontSize: '16px'}}>Ukraine</span></p>
        </td>
        <td style={{background: 'transparent', width: '253.665px'}}>
          <p><span style={{fontSize: '16px'}}>NRC is interested in using cash and voucher programming as a modality across all these areas of programming and across all phases of refugee/displaced settings.</span></p>
        </td>
        <td style={{background: 'transparent', width: '289px'}}>
          <p><a href="https://www.nrc.no/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.nrc.no</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p><span style={{fontSize: '16px'}}>Oxfam</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '85px'}}>
          <p><span style={{fontSize: '16px'}}>Cash transfers</span></p>
        </td>
        <td style={{background: 'transparent', width: '263.335px'}}>
          <p><span style={{fontSize: '16px'}}>Bosnia and Herzegovina, France, Germany, Greece, Ireland, Italy, Kosovo, Netherlands, Serbia, Spain, Turkey</span></p>
        </td>
        <td style={{background: 'transparent', width: '253.665px'}}>
          <p><span style={{fontSize: '16px'}}>Cash transfer programming forms a significant part of Oxfam GB’s work in food insecurity, and is an emerging response mechanism in shelter and water and sanitation sectors.</span></p>
        </td>
        <td style={{background: 'transparent', width: '289px'}}>
          <p><a href="https://www.oxfamamerica.org/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.oxfamamerica.org</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p><span style={{fontSize: '16px'}}>UNHCR</span></p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p><span style={{fontSize: '16px'}}>United Nations</span></p>
        </td>
        <td style={{background: 'transparent', width: '85px'}}>
          <p><span style={{fontSize: '16px'}}>Conditional and unconditional cash transfers</span></p>
        </td>
        <td style={{background: 'transparent', width: '263.335px'}}>
          <p><span style={{fontSize: '16px'}}>Albania, Belarus, Bosnia and Herzegovina, Bulgaria, Greece, Kosovo, North Macedonia, Moldova, Montenegro, Serbia, Slovakia, Turkey, Ukraine</span></p>
        </td>
        <td style={{background: 'transparent', width: '253.665px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '289px'}}>
          <p><a href="https://www.unhcr.org/en-us/europe.html"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.unhcr.org/en-us/europe.html</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '85px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '263.335px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '253.665px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '289px'}}>
          <p>&nbsp;</p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '86px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '85px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '263.335px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '253.665px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '289px'}}>
          <p>&nbsp;</p>
        </td>
      </tr>
    </tbody>
  </table>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h2><strong>Americas</strong></h2>
  <p>&nbsp;</p>
  <table style={{width: '1102px'}} cellSpacing={0} cellPadding={7}>
    <tbody>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Name</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '141px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Affiliation(s)</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '229px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Services</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '136px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Countries Served</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '251.364px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Other Information</strong></span></p>
        </td>
        <td style={{background: 'transparent', width: '276.636px'}}>
          <p align="center"><span style={{fontSize: '16px'}}><strong>Website</strong></span></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p><span style={{fontSize: '16px'}}>Refugee Cash Assistance</span></p>
        </td>
        <td style={{background: 'transparent', width: '141px'}}>
          <p><span style={{fontSize: '16px'}}>US Department of Social and Health Services, Office of Refugee Resettlement</span></p>
        </td>
        <td style={{background: 'transparent', width: '229px'}}>
          <p><span style={{fontSize: '16px'}}>Cash and medical assistance</span></p>
        </td>
        <td style={{background: 'transparent', width: '136px'}}>
          <p><span style={{fontSize: '16px'}}>United States</span></p>
        </td>
        <td style={{background: 'transparent', width: '251.364px'}}>
          <p><span style={{fontSize: '16px'}}>Provides services to refugees for their first 8 months in the United States</span></p>
        </td>
        <td style={{background: 'transparent', width: '276.636px'}}>
          <p><a href="https://www.dshs.wa.gov/esa/community-services-offices/refugee-cash-assistance"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.dshs.wa.gov/esa/community-services-offices/refugee-cash-assistance</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p><span style={{fontSize: '16px'}}>Action Against Hunger</span></p>
        </td>
        <td style={{background: 'transparent', width: '141px'}}>
          <p><span style={{fontSize: '16px'}}>ACF International</span></p>
        </td>
        <td style={{background: 'transparent', width: '229px'}}>
          <p><span style={{fontSize: '16px'}}>Cash assistance in response to food emergencies</span></p>
        </td>
        <td style={{background: 'transparent', width: '136px'}}>
          <p><span style={{fontSize: '16px'}}>Bolivia, Columbia, Guatemala, Haiti, Nicaragua, Peru</span></p>
        </td>
        <td style={{background: 'transparent', width: '251.364px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '276.636px'}}>
          <p><a href="https://www.actionagainsthunger.org/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.actionagainsthunger.org</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p><span style={{fontSize: '16px'}}>Norwegian Refugee Council</span></p>
        </td>
        <td style={{background: 'transparent', width: '141px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '229px'}}>
          <p><span style={{fontSize: '16px'}}>Cash assistance (conditional and unconditional)</span></p>
        </td>
        <td style={{background: 'transparent', width: '136px'}}>
          <p><span style={{fontSize: '16px'}}>Colombia</span></p>
        </td>
        <td style={{background: 'transparent', width: '251.364px'}}>
          <p><span style={{fontSize: '16px'}}>NRC is interested in using cash and voucher programming as a modality across all these areas of programming and across all phases of refugee/displaced settings.</span></p>
        </td>
        <td style={{background: 'transparent', width: '276.636px'}}>
          <p><a href="https://www.nrc.no/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.nrc.no</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p><span style={{fontSize: '16px'}}>Oxfam</span></p>
        </td>
        <td style={{background: 'transparent', width: '141px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '229px'}}>
          <p><span style={{fontSize: '16px'}}>Cash transfers</span></p>
        </td>
        <td style={{background: 'transparent', width: '136px'}}>
          <p><span style={{fontSize: '16px'}}>Colombia, Cuba, El Salvador, Guatemala, Mexico, Peru, United States</span></p>
        </td>
        <td style={{background: 'transparent', width: '251.364px'}}>
          <p><span style={{fontSize: '16px'}}>Cash transfer programming forms a significant part of Oxfam GB’s work in food insecurity, and is an emerging response mechanism in shelter and water and sanitation sectors.</span></p>
        </td>
        <td style={{background: 'transparent', width: '276.636px'}}>
          <p><a href="https://www.oxfamamerica.org/"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.oxfamamerica.org</u></span></span></a></p>
        </td>
      </tr>
      <tr valign="top">
        <td style={{background: 'transparent', width: '64px'}}>
          <p><span style={{fontSize: '16px'}}>UNHCR</span></p>
        </td>
        <td style={{background: 'transparent', width: '141px'}}>
          <p><span style={{fontSize: '16px'}}>United Nations</span></p>
        </td>
        <td style={{background: 'transparent', width: '229px'}}>
          <p><span style={{fontSize: '16px'}}>Conditional and unconditional cash transfers</span></p>
        </td>
        <td style={{background: 'transparent', width: '136px'}}>
          <p><span style={{fontSize: '16px'}}>Argentina, Brazil, Colombia, Costa Rica, Cuba, Ecuador, Haiti, Mexico, Panama, Peru, United States, Venezuela, </span></p>
        </td>
        <td style={{background: 'transparent', width: '251.364px'}}>
          <p>&nbsp;</p>
        </td>
        <td style={{background: 'transparent', width: '276.636px'}}>
          <p><a name="_GoBack" /> <a href="https://www.unhcr.org/en-us/americas.html"><span style={{color: '#1155cc'}}><span style={{fontSize: '16px'}}><u>https://www.unhcr.org/en-us/americas.html</u></span></span></a></p>
        </td>
      </tr>
    </tbody>
  </table>
  <p>&nbsp;</p>
</div>

    </div>
      </TabPanel>
      </Tabs>
      </div>
  )
}

function Resources() {
  return (
    <div>
    <div  className="text">
    <div id="rise">
      <div>
        <h2>Discussion for Lawyers</h2>
        <p><span style={{fontWeight: 400}}>The cash-based assistance industry stands at a significant inflection point. Refugee crises around the world have become exacerbated while mobile and financial technologies are spreading rapidly. The confluence of these two factors make cash-based assistance critically important in combating refugee issues throughout the globe.</span></p>
        <p><span style={{fontWeight: 400}}>The penetration rates for cash-based assistance program in many parts of the world remain low, yet smartphone access has risen significantly in most areas. Thus much of the infrastructure for a worldwide cash transfer network has already been laid and the true challenge lies in how to encourage a more significant flow of money and how to craft a legal and regulatory landscape that makes access to cash-based aid effective and efficient. The implications for a lawyer interested in this rapidly-developing sector are significant. Experts in the fields of money laundering, compliance, tax, regulations, and international law are all needed to properly shape the landscape of cash aid and microfinance for refugee assistance. Some of the many issues that currently require attention from skilled lawyers include the following:</span></p>
        <ul>
          <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>How do governments and financial institutions effectively monitor this worldwide flow of billions of dollars for money laundering activity?</span></li>
          <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>What are some ways to maximize the tax advantages of cash-based aid to encourage increased donations and investment?</span></li>
          <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>How do cash transfer organizations maintain reliable compliance programs without hindering the speed and effectiveness of the cash transfers?</span></li>
          <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>What cross-border regulatory regimes can best oversee the operation of this rapidly-growing industry?</span></li>
          <li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>How can aid organizations conduct these payment programs while making to adhere to relevant sanctions and other aspects of international law?</span></li>
        </ul>
        <p><span style={{fontWeight: 400}}>As the sector develops, it gives lawyers an opportunity to partner with leaders from business, the technology industry, the nonprofit sector, and government to develop sustainable solutions to address these issues. This site contains information on some of the region-specific issues facing the industry. Now, more than ever, smart and passionate lawyers are needed to shape the future of cash-based assistance and microfinance.</span></p>
        <p><br /><br /></p>
      </div>
    </div>
    </div>
    <img id="image" src={aboutimg} alt="Image of Cash Transfer"/>
    </div>
  )
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav className = "navigation">
          <div className = "fix">
          <div className = "title"><span>Sustainable Livelihoods and Cash Support <br></br>for Refugees Around the World</span></div>
          <div className="btn-group">
            <Link to={"/resources/"}><button id="link" type="button">Discussion for Lawyers</button></Link>
            <Link to={"/map/"}><button id="link" type="button">Cash Support Programs</button></Link>
            <Link to={"/regionbreakdown/"}><button id="link" type="button">Regional Breakdown</button></Link>
            <Link to={"/cashsupport/"}><button id="link" type="button">Why Cash-based Support</button></Link>
            <Link to={"/about/"}><button id="link" type="button">About Us</button></Link>
          </div>
          </div>
        </nav>

        <Switch>
        <Route path={"/about/"} component={About} />
        <Route path={"/cashsupport/"} component={CashSupport} />
        <Route path={"/regionbreakdown/"} exact component={RegionalBreakdown} />
        <Route path={"/map/"} exact component={InteractiveMap} />
        <Route path={"/resources/"} exact component={Resources} />
          <Route path="*" component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
