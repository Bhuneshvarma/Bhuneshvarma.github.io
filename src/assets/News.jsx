/* eslint-disable react/prop-types */
import { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Livelaw.in"
            },
            "author": "LIVELAW NEWS NETWORK",
            "title": "BREAKING | Gyanvapi Mosque Committee Moves Allahabad HC Against Varanasi Court's Order Allowing 'Puja' In ... - Live Law - Indian Legal News",
            "description": "The Anjuman Intezamia Masajid Committee (which manages Gyanvpai mosque in Varanasi) has moved the Allahabad High Court challenging the Varanasi District Court's yesterday order which allowed...",
            "url": "https://www.livelaw.in/top-stories/allahabad-high-court-gyanvapi-mosque-committee-varanasi-court-order-allowing-puja-vyas-tehkhana-248214",
            "urlToImage": "https://www.livelaw.in/h-upload/2022/10/15/439550-gyanvapi-mosque-and-allahabad-hc.jpg",
            "publishedAt": "2024-02-01T09:01:14Z",
            "content": "The Anjuman Intezamia Masajid Committee (which manages Gyanvpai mosque in Varanasi) has moved the Allahabad High Court challenging the Varanasi District Court's yesterday order which allowed Hindus t… [+2300 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Devina Sengupta",
            "title": "Budget 2024: A plus for jobs in tourism, deep-tech, infra | Mint - Mint",
            "description": "The budget proposes an 11% increase in infrastructure capex in FY25 to ₹11.11 trillion",
            "url": "https://www.livemint.com/news/india/budget-2024-a-plus-for-jobs-in-tourism-deep-tech-infra-11706775885969.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2024/02/01/1600x900/Gangtok-ktmC--621x414LiveMint_1706776054913_1706776055098.jpg",
            "publishedAt": "2024-02-01T08:33:52Z",
            "content": "Multiple budget proposals related to tourism, infrastructure, ports, construction and technology are expected to create more employment in these sectors. \"States will be encouraged to take up compreh… [+2347 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News.cn"
            },
            "author": "",
            "title": "Japan's moon probe SLIM in dormant state with solar power generation unavailable: JAXA - Xinhua",
            "description": "",
            "url": "https://english.news.cn/asiapacific/20240201/928dd04f14704e0887cd6a22f45e5b15/c.html",
            "urlToImage": null,
            "publishedAt": "2024-02-01T08:12:00Z",
            "content": "TOKYO, Feb. 1 (Xinhua) -- Japan's lunar probe has re-entered a dormant state and suspended activities as it reached sunset, rendering solar power generation unavailable, the country's space agency sa… [+1227 chars]"
        },
        {
            "source": {
                "id": "the-hindu",
                "name": "The Hindu"
            },
            "author": "The Hindu",
            "title": "Budget 2024: No change to direct and indirect tax rates: Finance Minister in Budget Speech - The Hindu",
            "description": null,
            "url": "https://www.thehindu.com/business/budget/no-change-to-direct-and-indirect-tax-rates-finance-minister-in-budget-speech/article67799637.ece",
            "urlToImage": null,
            "publishedAt": "2024-02-01T07:12:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Business Standard"
            },
            "author": "Sunainaa Chadha",
            "title": "Interim Budget 2024: FM enhances Lakhpati Didi scheme to target 3 cr women - Business Standard",
            "description": "Last year, Prime Minister Narendra Modi announced the scheme, which aims to encourage women to start micro-enterprises, during his Independence Day speech on August 15, 2023.",
            "url": "https://www.business-standard.com/budget/news/govt-to-enhance-lakhpati-didi-scheme-to-target-3-crore-women-124020100359_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-02/01/full/1706768691-6068.jpg",
            "publishedAt": "2024-02-01T06:54:30Z",
            "content": "Last year, Prime Minister Narendra Modi announced the scheme, which aims to encourage women to start micro-enterprises, during his Independence Day speech on August 15, 2023.\r\nPhoto: PTI\r\nSunainaa Ch… [+4227 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "Budget 2024: Railway stocks fall after budget announcement - Moneycontrol",
            "description": "In the previous budget, the allocation for railways was Rs 2.4 lakh crore, which was an all-time high",
            "url": "https://www.moneycontrol.com/news/business/markets/budget-2024-railway-stocks-fall-after-budget-announcement-12146451.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/01/stocks5-770x433.jpg",
            "publishedAt": "2024-02-01T06:48:08Z",
            "content": "Railway stocks fell on February 1 after the Finance Minister Nirmala Sitharaman announced an increase in allocation for the sector. The stocks were trading higher in January amid expectations of inc… [+2442 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Entertainment Desk",
            "title": "Priyanka Chopra-Nick Jonas move out of $20 million LA mansion after it becomes ‘virtually unlivable’, file law suit against seller - The Indian Express",
            "description": "Priyanka Chopra and Nick Jonas bought their Los Angeles mansion in 2019 for $20 million. They have now filed a legal suit seeking 'consequential damages' from sellers of the house.",
            "url": "https://indianexpress.com/article/entertainment/bollywood/priyanka-chopra-nick-jonas-move-out-of-20-million-la-mansion-after-it-becomes-virtually-unlivable-file-law-suit-against-seller-9138344/",
            "urlToImage": "https://images.indianexpress.com/2023/11/priyanka-nick.jpg",
            "publishedAt": "2024-02-01T06:34:14Z",
            "content": "Priyanka Chopraand Nick Jonas, who have been living in their dream home in Los Angeles since 2019, have moved out of the property after it became “virtually unlivable” as per a report by Page Six. Th… [+2296 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Fighter worldwide box office collection day 7: Hrithik film enters ₹250 cr club - Hindustan Times",
            "description": "Fighter worldwide box office collection day 7: The Hrithik Roshan and Deepika Padukone-starrer breaches ₹250 crore milestone. It is directed by Siddharth Anand. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/fighter-worldwide-box-office-collection-day-7-deepika-padukone-hrithik-roshan-250-crore-club-101706767121040.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/01/1600x900/5128-fighter_1706767166474_1706767181914.jpg",
            "publishedAt": "2024-02-01T06:20:23Z",
            "content": "Fighter worldwide box office collection day 7: Deepika Padukone and Hrithik Roshan's first collaboration, Fighter, also featuring Anil Kapoor, was released on January 25. On Thursday, film trade anal… [+1937 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Manish Singh",
            "title": "India’s central bank discusses more penalties on Paytm Payments Bank, including revoking license - TechCrunch",
            "description": "The Reserve Bank of India is discussing more penalties on Paytm Payments Bank and may reach a decision within days, two sources familiar with the matter The Reserve Bank of India is discussing more penalties on Paytm Payments Bank and may reach a decision wit…",
            "url": "https://techcrunch.com/2024/01/31/indias-central-bank-discusses-more-penalties-on-paytm-payments-bank-including-revoking-license/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-634064462.jpg?resize=1200,800",
            "publishedAt": "2024-02-01T05:51:00Z",
            "content": "The Reserve Bank of India is discussing more penalties on Paytm Payments Bank and may reach a decision within days, two sources familiar with the matter told TechCrunch, as troubles mount for the Ind… [+2789 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Livemint",
            "title": "US visa news: H-1B, L-1 and EB-5 visa fees hiked; to come into effect from 1 April. Check details here | Mint - Mint",
            "description": "The United States has announced a steep fee hike for H-1B, L-1, and EB-5 visas, which are commonly used by Indians to immigrate to the country. This is the first fee increase since 2016 and will be effective from April 1st.",
            "url": "https://www.livemint.com/news/world/us-visa-news-h-1b-l-1-and-eb-5-visa-fees-hiked-to-come-into-effect-from-1-april-check-details-here-11706764592779.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2024/02/01/1600x900/The-US-has-announced-a-major-overhaul-of-its-annua_1706764770510_1706764874803.jpg",
            "publishedAt": "2024-02-01T05:50:57Z",
            "content": "In major overhauls of visa services provided by the United States, ahead of the crucial Presidential Elections, Washington announced steep fee hike for various categories of non-immigrant visas like … [+2458 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Hemant Soren moves Supreme Court challenging ED arrest, hearing tomorrow - Hindustan Times",
            "description": "Hemant Soren's arrest goes to the Supreme Court as advocates Kapil Sibal, Abhishek Manu Singhvi challenge ED arresting the former CM. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/hemant-soren-moves-supreme-court-challenging-ed-arrest-will-withdraw-petition-from-high-court-101706765447863.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/01/1600x900/Hemant_Soren_supreme_court_1706765517418_1706765517554.jpg",
            "publishedAt": "2024-02-01T05:33:19Z",
            "content": "Former Jharkhand chief minister Hemant Soren on Thursday moved the Supreme Court against his arrest by the Enforcement Directorate and the top court agreed to hear his petition on Friday. On behalf o… [+1847 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Soft drink consumption linked to liver cancer risk in women - IndiaTimes",
            "description": "Soft drinks, laden with excessive sugars, artificial additives, and high-fructose corn syrup, can exert detrimental effects on liver health. The liver plays a pivotal role in metabolizing sugars, and when inundated with the elevated sugar content in soft drin…",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/soft-drink-consumption-linked-to-liver-cancer-risk-in-women/photostory/107312628.cms",
            "urlToImage": "https://static.toiimg.com/photo/107312897.cms",
            "publishedAt": "2024-02-01T05:30:00Z",
            "content": "Soft drinks, laden with excessive sugars, artificial additives, and high-fructose corn syrup, can exert detrimental effects on liver health. The liver plays a pivotal role in metabolizing sugars, and… [+627 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Markets live updates: Sensex gains 250 points to cross 72,000-mark - Hindustan Times",
            "description": "Budget Stock Market Impact highlight: Stay informed on the latest market trends as FM Nirmala Sitharaman presents the interim Union Budget 2024.",
            "url": "https://www.hindustantimes.com/business/markets-live-updates-interim-union-budget-sensex-nifty-news-feb-1-101706764912712.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/01/1600x900/nirmala_sithraman_1706765981025_1706765981246.png",
            "publishedAt": "2024-02-01T05:29:25Z",
            "content": "Mohammad Athar- Partner and Leader CP&amp;I &amp; Industrial Development , PwC India:\r\nThe budget has maintained a consistent focus on infrastructure investments as a key enabler for driving Indias c… [+847 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Livemint",
            "title": "FM Nirmala Sitharaman dons blue-cream saree to present Interim Budget 2024 | Mint - Mint",
            "description": "Over the years, Sitharaman has worn various traditional sarees on Budget Day, promoting Indian fabrics and breaking colonial traditions.",
            "url": "https://www.livemint.com/news/trends/budget-day-finance-minister-nirmala-sitharaman-dons-blue-cream-saree-to-present-interim-budget-2024-11706762782014.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2024/02/01/1600x900/PTI02-01-2024-000047B-0_1706762988897_1706763023796.jpg",
            "publishedAt": "2024-02-01T05:20:25Z",
            "content": "Union Finance Minister Nirmala Sitharaman, who is known for her attraction towards Indian textiles, opted for a blue-cream saree embroidered Kantha silk saree on Budget Day that will be presented tod… [+1932 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Caravanmagazine.in"
            },
            "author": "The Caravan",
            "title": "Editor's Pick - The Caravan",
            "description": "",
            "url": "https://caravanmagazine.in/editors-pick/glenn-seaborg-plutonium",
            "urlToImage": "https://lh3.googleusercontent.com/WCwOLzyxS2bE4zsR9PXoG61fN319wdcLMKV8do2p01ERe9vQhqJtgRH6GQbJdd8yRc6ZpfkRF8LW7K9MNBuvpPyfR_uAcQ0P1W9NYA=w1200-h630-pp",
            "publishedAt": "2024-02-01T05:08:53Z",
            "content": "ON 23 FEBRUARY 1941, Glenn Theodore Seaborg and two other researchers at the University of California, Berkeley, produced plutonium for the first time. This was the culmination of an experiment that … [+1686 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "‘Heeramandi: The Diamond Bazaar’ first look: Sanjay Leela Bhansali weaves a gripping narrative with grand - IndiaTimes",
            "description": "Sanjay Leela Bhansali, renowned for his cinematic brilliance, unveils the first look of his OTT debut, \"Heeramandi: The Diamond Bazaar.\" Featuring a s",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/heeramandi-the-diamond-bazaar-first-look-sanjay-leela-bhansali-weaves-a-gripping-narrative-with-grandeur-and-grace/articleshow/107312770.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-107312747,width-1070,height-580,imgsize-82122,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-01T05:03:00Z",
            "content": "Inside Jonas Brothers after-party ft Malaika Arora, Bhumi Pednekar, Sussanne Khan &amp; more"
        },
        {
            "source": {
                "id": null,
                "name": "Bar & Bench - Indian Legal News"
            },
            "author": "Bar & Bench",
            "title": "Chandigarh Mayor polls: AAP Councillor moves Supreme Court after P&H High Court refuses immediate stay - Bar & Bench - Indian Legal News",
            "description": "Aam Aadmi Party Councillor Kuldeep Kumar has moved the Supreme Court against Punjab and Haryana High Court’s refusal to grant an immediate stay on election resu",
            "url": "https://www.barandbench.com/news/chandigarh-mayor-polls-aap-councillor-moves-supreme-court-high-court-refuses-immediate-stay-result",
            "urlToImage": "https://media.assettype.com/barandbench%2F2021-02%2Fae7e8255-85a8-4852-a0de-ca4f4a7d9c8a%2FSupreme_Court__1_.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
            "publishedAt": "2024-02-01T04:44:25Z",
            "content": "A Special Leave Petition (SLP) against the High Court order was filed Thursday morning.\r\nIt has been argued that in the SLP that the High Court erred in not granting any interim relief to the petitio… [+639 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Rohit Sharma's career-saver and an England trouncing: India's record at Vizag - Hindustan Times",
            "description": "Visakhapatnam is a relatively new venue in international cricket, particularly for Test matches. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/rohit-sharmas-career-defining-match-and-a-trouncing-of-england-looking-back-at-previous-tests-in-visakhapatnam-101706757873778.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/01/1600x900/rohit_sharma_mayank_agarwal_bcci_1706760443763_1706760449189.jpg",
            "publishedAt": "2024-02-01T04:22:24Z",
            "content": "The Dr. YS Rajashekar Reddy ACAVDCA Cricket Stadium in Visakhapatnam is the venue for the second Test between India and England. The match starts on Friday and India are looking to bounce back after … [+3277 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Abhishek Shingare",
            "title": "Suzlon Energy Standalone December 2023 Net Sales at Rs 907.64 crore, down 0.34% Y-o-Y - Moneycontrol",
            "description": "",
            "url": "https://www.moneycontrol.com/news/business/earnings/suzlon-energy-standalone-december-2023-net-sales-at-rs-907-64-crore-down-0-34-y-o-y-12167741.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2017/04/shutterstock_310523045-462x435.jpg",
            "publishedAt": "2024-02-01T04:14:29Z",
            "content": "Reported Standalone quarterly numbers for Suzlon Energy are:Net Sales at Rs 907.64 crore in December 2023 down 0.34% from Rs. 910.77 crore in December 2022.\r\nQuarterly Net Profit at Rs. 24.17 crore i… [+412 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBCTV18"
            },
            "author": "https://www.cnbctv18.com",
            "title": "Disney reaches pact to sell 60% of its India business to Viacom18, as per reports - CNBCTV18",
            "description": "According to the WSJ report, the pact values the India business at $3.9 billion or ₹33,000 crore and the transaction is likely to close this month.",
            "url": "https://www.cnbctv18.com/market/disney-reaches-pact-to-sell-60-of-its-india-business-to-viacom18-as-per-reports-ril-tv18-share-price-18943461.htm",
            "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2024/01/disney-1019x573.jpg",
            "publishedAt": "2024-02-01T03:17:33Z",
            "content": "Note To ReadersNetwork18, the parent company of CNBCTV18.com, is controlled by Independent Media Trust, of which Reliance Industries is the sole beneficiary."
        }
    ]

    static defaultProps ={
      country: 'in',
      pageSize: 8,
      category: 'general',
    }
    static propTypes ={
        country: PropTypes.string,
        pageSize:PropTypes.number,
        category: PropTypes.string,
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
       document.title = ` NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)} `;
    }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=879196d6e5934afab459ec2f05e636a9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    async componentDidMount() {
        this.updateNews();
    }
    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }


    handleNextClick = async () => {
       this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 style={{ textAlign: "center" }}>NewsMonkey - Top Headlines From {this.capitalizeFirstLetter(this.props.category)} Category</h2>
                    {this.state.loading && <Spinner />}
                <div className="row my-2">
                    {!this.state.loading && this.state.articles.map((element => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} NewsUrl={element.url} author={element.author}  date={element.publishedAt} source={element.source.name} />
                        </div>
                    }))}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-between">
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} style={{
                                marginRight: "auto"
                            }}> &larr; Previous</button>
                            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} style={{
                                marginLeft: "auto"
                            }}>Next &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default News;


