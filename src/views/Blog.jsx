
import img1 from "../Images/blog-img-1.jpg"
import img2 from "../Images/blog-img-2.jpg"
import img3 from "../Images/blog-img-3.jpg"
import img4 from "../Images/blog-img-4.jpg"
import img5 from "../Images/blog-img-5.jpg"
import img6 from "../Images/blog-img-6.jpg"


import BlogComponents from "./BlogComponents"
import "./Blog.css"
import PageHeading from "./PageHeading"
export default function () {
    return(
        <>
            <PageHeading heading="Our Blogs"/>
             <div className="container">
                <div className="blog py-3">
                    <BlogComponents img={img1} title="Behind the Seams: Journey into Fashion Creation" desc="Take a behind-the-scenes look at the creative process behind your favorite fashion pieces. From design sketches to runway debuts, join us on a fascinating journey into the world of fashion creation and craftsmanship."/>
                    <BlogComponents img={img2} title="Beauty Buzz: Insider Tips for Glamorous Looks" desc="Elevate your beauty game with insider tips, product reviews, and tutorials from industry experts. Whether you're a makeup novice or a beauty enthusiast, discover the latest beauty trends and unleash your inner glam."/>
                    <BlogComponents img={img3} title="Wellness Corner: Nurturing Mind, Body, and Soul" desc="Prioritize self-care and wellness with our holistic approach to health and wellness. From fitness routines to mindfulness practices, explore tips and resources to nourish your mind, body, and soul for a balanced lifestyle."/>
                    <BlogComponents img={img4} title="Sustainable Style: Fashion with a Purpose" desc="Join the movement towards sustainable fashion and discover eco-friendly alternatives that make a positive impact on the planet. Learn about ethical brands, sustainable materials, and conscious consumerism as we strive to create a more sustainable future."/>
                    <BlogComponents img={img5} title="Fashion Forward: Spotlight on Emerging Designers" desc="Celebrate creativity and innovation in fashion with our spotlight on emerging designers and rising stars in the industry. Discover unique styles, bold designs, and fresh perspectives as we champion the next generation of fashion trailblazers."/>
                    <BlogComponents img={img6} title="Style Diaries: Discover Your Signature Look" desc="Explore endless possibilities to express your unique style with our curated style diaries. From chic streetwear to elegant evening ensembles, find inspiration for every occasion and unlock your true fashion potential."/>
                </div>
             </div>
        </>
    )
}