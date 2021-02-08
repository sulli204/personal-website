import React from "react"

export default function MyWork() {
    return (
        <section className="section my-work" data-section="section3">
            <div className="container">
                <div className="section-heading">
                    <h2>My Work</h2>
                    <div className="line-dec"></div>
                    <span>Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit amet.
                        Duis ac elit vulputate, lobortis arcu quis, vehicula mauris.</span>
                </div>
                <div className="row">
                    <div className="isotope-wrapper">
                        <form action="#" method="post" className="isotope-toolbar">
                            <label>
                                <input type="radio" datatype="*"checked name="isotope-filter" />
                                <span>All</span>
                            </label>
                            <label>
                                <input type='radio' datatype="Software Dev" name="isotope-filter" />
                                <span>Software Development</span>
                            </label>
                            <label>
                                <input type="radio" datatype="Music" name="isotope-filter" />
                                <span>Music</span>
                            </label>
                            <label>
                                <input type="radio" datatype="3D Rendering" name="isotope-filter" />
                                <span>3D Rendering</span>
                            </label>
                        </form>
                        <div className="isotope-box">
                            <div className="isotope-item" datatype="Music" >
                                <figure className="snip1321">
                                    <img src={process.env.PUBLIC_URL + 'template_reflux/assets/images/portfolio-01.jpg'}></img>
                                    <figcaption>
                                        <a href="assets/images/portfolio-01.jpg" data-lightbox="image-1" data-title="Caption">
                                            <i class="fa fa-search">
                                            </i>
                                        </a>
                                    </figcaption>
                                </figure>
                                {/* <div class="isotope-item" data-type="people" style="position: absolute;">
                                    <figure class="snip1321">
                                        <img src="assets/images/portfolio-02.jpg" alt="website template image" />
                                        <figcaption>
                                            <a href="assets/images/portfolio-02.jpg" data-lightbox="image-1" data-title="Caption">
                                                <i class="fa fa-search">
                                                </i>
                                            </a>
                                            <h4>Second Title</h4>
                                            <span>please tell your friends</span>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div class="isotope-item" data-type="animals" style="position: absolute;">
                                    <figure class="snip1321">
                                        <img src="assets/images/portfolio-03.jpg" alt="website template image" />
                                        <figcaption>
                                            <a href="assets/images/portfolio-03.jpg" data-lightbox="image-1" data-title="Caption">
                                                <i class="fa fa-search">
                                                </i>
                                            </a>
                                            <h4>Item Third</h4>
                                            <span>customize anything</span>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div class="isotope-item" data-type="people" style="position: absolute;">
                                    <figure class="snip1321">
                                        <img src="assets/images/portfolio-04.jpg" alt="website template image" />
                                        <figcaption>
                                            <a href="assets/images/portfolio-04.jpg" data-lightbox="image-1" data-title="Caption">
                                                <i class="fa fa-search">
                                                </i>
                                            </a>
                                            <h4>Item Fourth</h4>
                                            <span>sapien nisi turpis</span>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div class="isotope-item" data-type="nature" style="position: absolute;">
                                    <figure class="snip1321">
                                        <img src="assets/images/portfolio-05.jpg" alt="website template image" />
                                        <figcaption>
                                            <a href="assets/images/portfolio-05.jpg" data-lightbox="image-1" data-title="Caption">
                                                <i class="fa fa-search">
                                                </i>
                                            </a>
                                            <h4>Fifth Awesome</h4>
                                            <span>Ut sollicitudin risus</span></figcaption>
                                    </figure>
                                </div>
                                <div class="isotope-item" data-type="animals" style="position: absolute;">
                                    <figure class="snip1321"><img src="assets/images/portfolio-06.jpg" alt="website template image" />
                                        <figcaption><a href="assets/images/portfolio-06.jpg" data-lightbox="image-1" data-title="Caption"><i class="fa fa-search"></i></a>
                                            <h4>Awesome Sixth</h4>
                                            <span>Donec eget massa ante</span></figcaption>
                                    </figure>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}