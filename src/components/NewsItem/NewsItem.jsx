import './NewsItem.css'
import './MediaNewsItem.css'

import newsItem1 from '../../assets/newsItem1.png';
import newsItem2 from '../../assets/newsItem2.png';
import newsItem3 from '../../assets/newsItem3.png';
import AnimatedText from '../UI/AnimatedText/AnimatedText';
import AnimatedImage from '../UI/AnimatedImage/AnimatedImage';
function NewsItem() {
    return (
        <>
            <div className="news">
                <section className="news-title position-relative ">
                    <div className="container container-lg">
                        <div className="news-title-content margin-3-6">
                            <AnimatedText id='animate-line-before' className="title-anim hero-title title title-lg">
                                <span>Заголовок</span> Новости
                            </AnimatedText>
                            <AnimatedImage className="image">
                                <img src={newsItem1} alt="Недвижимость" />
                            </AnimatedImage>
                        </div>
                        <div className="news-title-description margin-3-4">
                            <AnimatedText as='p' className="text-fade-in block-text text-for-description">
                                Lorem ipsum dolor sit amet consectetur. Id sit magnis rhoncus
                                aliquam ac massa. Sed lacus
                                fermentum ac nibh pellentesque feugiat sem in ipsum. Scelerisque gravida a viverra tristique.
                                Eget urna cursus velit tristique urna. Consequat velit odio odio quisque nisl. Ipsum sagittis
                                aliquet porta ultricies. Blandit enim sit consequat ultricies penatibus hac vitae sit. Aliquam
                                etiam eu in blandit turpis. In pharetra feugiat aliquet tristique eget turpis quis. Condimentum
                                urna orci aliquam ornare pharetra. Magna vitae a in erat lorem vitae varius rhoncus nulla. Ut
                                sit amet congue sagittis dolor. Auctor est eget sed nibh quis et pharetra. Viverra ut leo ac
                                egestas mattis mi purus mauris.
                            </AnimatedText>
                            <AnimatedText as='p' className="title-anim quote-text">
                                <span className="quote-text__quote">“</span>
                                Фраза или то, что нужно подчеркнуть
                            </AnimatedText>
                            <div className="phrase-block-flex">
                                <div className="phrase-block-flex__left">
                                    <AnimatedImage>
                                        <img src={newsItem2} alt="Недвижимость" />
                                    </AnimatedImage>
                                    <AnimatedText as='p' className="text-fade-in block-text text-for-description">
                                        На сегодняшний день, строительная компания Prime Holding, как надежный застройщик,
                                        возводит более 800тыс кв.м. параллельно, ставя рекорд одновременного строительства в
                                        Республике, выходя тем самым на первое место среди застройщиков по объемам
                                        строительства. На сегодняшний день, строительная компания Prime Holding.
                                    </AnimatedText>
                                    <AnimatedText as='p' className="title-anim quote-text">
                                        Подзаголовок
                                    </AnimatedText>
                                    <AnimatedText as='p' className="text-fade-in block-text text-for-description">
                                        На сегодняшний день, строительная компания Prime Holding, как надежный застройщик,
                                        возводит более 800тыс кв.м. параллельно, ставя рекорд одновременного строительства в
                                        Республике, выходя тем самым на первое место среди застройщиков по объемам
                                        строительства. На сегодняшний день, строительная компания Prime Holding.
                                    </AnimatedText>
                                </div>
                                <div className="phrase-block-flex__right">
                                    <AnimatedText as='p' className="text-fade-in block-text text-for-description">
                                        Lorem ipsum dolor sit amet consectetur. Facilisis enim dui feugiat nibh elementum
                                        pellentesque massa nulla. Scelerisque vulputate diam eu ultricies cras. Porta
                                        ullamcorper in quis lacus a lobortis. Imperdiet mus nunc id lacus dignissim
                                        pellentesque. Facilisis enim nisl blandit semper cursus sed ac. Pulvinar in in vitae
                                        turpis dignissim leo risus nulla eget. Elementum id venenatis consequat tincidunt.
                                        Sodales sed pharetra in at in eu maecenas elementum. Bibendum odio ullamcorper lobortis
                                        adipiscing. Facilisi tortor nunc morbi porttitor ullamcorper malesuada. Pellentesque
                                        elit elit venenatis convallis sed venenatis sem donec gravida. Eu tortor mattis leo
                                        vitae netus. Maecenas porttitor odio turpis rhoncus mi lacus adipiscing id urna. Id
                                        placerat diam lorem id elit varius nisl semper. Massa etiam risus auctor arcu quam
                                        aliquet. Nunc maecenas nec viverra posuere quam. Augue turpis mi venenatis sit enim
                                        ullamcorper non. Scelerisque amet malesuada neque interdum scelerisque. Rutrum tristique
                                        ut viverra adipiscing tincidunt ipsum at varius et.
                                    </AnimatedText>
                                    <AnimatedImage>
                                        <img src={newsItem3} alt="Недвижимость" />
                                    </AnimatedImage>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default NewsItem;