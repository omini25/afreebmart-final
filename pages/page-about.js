import Layout from "../components/layout/Layout";

function About() {
    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="About">
            <div className="container  pt-50">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <section className="row align-items-center mb-50">
                                <div className="col-lg-6">
                                    <img src="/assets/imgs/page/about-1.png" alt="" className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="pl-25">
                                        <h2 className="mb-30">Welcome To Afreebmart - Sow, Grow, Share: Freshness For
                                            All!</h2>
                                        <h6>About Us</h6>
                                        <p className="mb-25">
                                            Afreebmart is more than just a grocery store; it's a movement towards a
                                            fresher, more connected way of sourcing and enjoying food. Our tagline,
                                            "Sow, Grow, Share: Freshness for All," encapsulates our mission to bring
                                            suppliers, vendors, and consumers together on a platform that prioritizes
                                            transparency, quality, and community.
                                        </p>

                                        <h6>Our Mission</h6>
                                        <p className="mb-50">At Afreebmart, we believe in eliminating barriers and connecting you directly with the source of your food. Our primary objective is to empower suppliers and vendors by providing them with a platform to showcase their products and connect with consumers without the interference of middlemen. By doing so, we aim to reduce costs, increase visibility for agro-food sellers, and ensure that you receive the freshest and highest-quality food items.
                                        </p>

                                    </div>
                                </div>
                            </section>
                            <section className="text-center mb-50">
                                <h2 className="title style-3 mb-40">Why Choose Afreebmart?</h2>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            {/*<img src="/assets/imgs/theme/icons/icon-1.svg" alt=""/>*/}
                                            <h4>Direct Connection</h4>
                                            <p>We facilitate direct connections between suppliers, vendors, and
                                                consumers, promoting transparency and trust.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            {/*<img src="/assets/imgs/theme/icons/icon-2.svg" alt="" />*/}
                                            <h4>Quality Assurance</h4>
                                            <p>We uphold strict quality standards to ensure that every product you
                                                purchase meets our freshness criteria.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            {/*<img src="/assets/imgs/theme/icons/icon-3.svg" alt="" />*/}
                                            <h4>Cost Efficiency</h4>
                                            <p>By eliminating unnecessary markups, we offer cost-effective solutions,
                                                making fresh food accessible to all.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            {/*<img src="/assets/imgs/theme/icons/icon-4.svg" alt="" />*/}
                                            <h4>Community Empowerment</h4>
                                            <p>Our feature that enables group buying fosters collaboration and support
                                                among users, benefiting local communities.</p>

                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            {/*<img src="/assets/imgs/theme/icons/icon-5.svg" alt="" />*/}
                                            <h4>User-Friendly Experience</h4>
                                            <p>Our platform is designed for ease of use, with intuitive navigation and
                                                secure payment options.</p>

                                        </div>
                                    </div>
                                    {/*<div className="col-lg-4 col-md-6 mb-24">*/}
                                    {/*    <div className="featured-card">*/}
                                    {/*    <img src="/assets/imgs/theme/icons/icon-6.svg" alt="" />*/}
                                    {/*        <h4>Great Daily Deal</h4>*/}
                                    {/*        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>*/}
                                    {/*        <a href="#">Read more</a>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </section>
                            <section className="row align-items-center mb-50">
                                <div className="row mb-50 align-items-center">
                                    {/*<div className="col-lg-7 pr-30">*/}
                                    {/*    <img src="/assets/imgs/page/about-5.png" alt="" className="mb-md-3 mb-lg-0 mb-sm-4" />*/}
                                    {/*</div>*/}
                                    <div className="">
                                        <h4 className="mb-20 text-muted">Join Us</h4>
                                        {/*<h1 className="heading-1 mb-40">Your Partner for e-commerce grocery solution</h1>*/}
                                        <p className="mb-30">Join the Afreebmart community today and be part of a movement that supports local agriculture, promotes sustainability, and brings fresh, healthy food options to your table. Sow, grow, and share with us at Afreebmart - where freshness is for all!</p>
                                        {/*<p>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>*/}

                                    </div>
                                </div>
                                {/*<div className="row">*/}
                                {/*    <div className="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">*/}
                                {/*        <h3 className="mb-30">Who we are</h3>*/}
                                {/*        <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>*/}
                                {/*    </div>*/}
                                {/*    <div className="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">*/}
                                {/*        <h3 className="mb-30">Our history</h3>*/}
                                {/*        <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>*/}
                                {/*    </div>*/}
                                {/*    <div className="col-lg-4">*/}
                                {/*        <h3 className="mb-30">Our mission</h3>*/}
                                {/*        <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </section>
                        </div>
                    </div>
                </div>
                {/*<section className="container mb-50 d-none d-md-block">*/}
                {/*    <div className="row about-count">*/}
                {/*        <div className="col-lg-1-5 col-md-6 text-center mb-lg-0 mb-md-5">*/}
                {/*            <h1 className="heading-1"><span className="count">12</span>+</h1>*/}
                {/*            <h4>Glorious years</h4>*/}
                {/*        </div>*/}
                {/*        <div className="col-lg-1-5 col-md-6 text-center">*/}
                {/*            <h1 className="heading-1"><span className="count">36</span>+</h1>*/}
                {/*            <h4>Happy clients</h4>*/}
                {/*        </div>*/}
                {/*        <div className="col-lg-1-5 col-md-6 text-center">*/}
                {/*            <h1 className="heading-1"><span className="count">58</span>+</h1>*/}
                {/*            <h4>Projects complete</h4>*/}
                {/*        </div>*/}
                {/*        <div className="col-lg-1-5 col-md-6 text-center">*/}
                {/*            <h1 className="heading-1"><span className="count">24</span>+</h1>*/}
                {/*            <h4>Team advisor</h4>*/}
                {/*        </div>*/}
                {/*        <div className="col-lg-1-5 text-center d-none d-lg-block">*/}
                {/*            <h1 className="heading-1"><span className="count">26</span>+</h1>*/}
                {/*            <h4>Products Sale</h4>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<div className="container">*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-xl-10 col-lg-12 m-auto">*/}
                {/*            <section className="mb-50">*/}
                {/*                <h2 className="title style-3 mb-40 text-center">Our Team</h2>*/}
                {/*                <div className="row">*/}
                {/*                    <div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">*/}
                {/*                        <h6 className="mb-5 text-brand">Our Team</h6>*/}
                {/*                        <h1 className="mb-30">Meet Our Expert Team</h1>*/}
                {/*                        <p className="mb-30">Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>*/}
                {/*                        <p className="mb-30">Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>*/}
                {/*                        <a href="#" className="btn">View All Members</a>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-lg-8">*/}
                {/*                        <div className="row">*/}
                {/*                            <div className="col-lg-6 col-md-6">*/}
                {/*                                <div className="team-card">*/}
                {/*                                    <img src="/assets/imgs/page/about-6.png" alt="" />*/}
                {/*                                    <div className="content text-center">*/}
                {/*                                        <h4 className="mb-5">H. Merinda</h4>*/}
                {/*                                        <span>CEO & Co-Founder</span>*/}
                {/*                                        <div className="social-network mt-20">*/}
                {/*                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-facebook-brand.svg" alt="" /></a>*/}
                {/*                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-twitter-brand.svg" alt="" /></a>*/}
                {/*                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-instagram-brand.svg" alt="" /></a>*/}
                {/*                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-youtube-brand.svg" alt="" /></a>*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <div className="col-lg-6 col-md-6">*/}
                {/*                                <div className="team-card">*/}
                {/*                                    <img src="/assets/imgs/page/about-8.png" alt="" />*/}
                {/*                                    <div className="content text-center">*/}
                {/*                                        <h4 className="mb-5">Dilan Specter</h4>*/}
                {/*                                        <span>Head Engineer</span>*/}
                {/*                                        <div className="social-network mt-20">*/}
                {/*                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-facebook-brand.svg" alt="" /></a>*/}
                {/*                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-twitter-brand.svg" alt="" /></a>*/}
                {/*                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-instagram-brand.svg" alt="" /></a>*/}
                {/*                                            <a href="#"><img src="/assets/imgs/theme/icons/icon-youtube-brand.svg" alt="" /></a>*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </section>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </Layout>
        </>
    );
}

export default About;
