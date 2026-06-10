import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className="description">
                <p>Plan and organize your events with ease using our comprehensive event planning tool.</p>
                <button className="get-started-button">Get Started</button>
            </section>
                <section className="events_categories">
                    <ul>
                        <h2>Event Categories</h2>
                        <li>Weddings</li>
                        <li>Corporate Events</li>
                        <li>Birthday Parties</li>
                        <li>Conferences</li>
                    </ul>
                    <ul>
                        <h2>Entertainment</h2>
                        <li>Live Music</li>
                        <li>DJs</li>
                        <li>Performers</li>
                    </ul>
                    <ul>
                        <h2>Community Events</h2>
                        <li>Charity Galas</li>
                        <li>Local Festivals</li>
                        <li>Neighborhood Gatherings</li>
                    </ul>
                    </section>
                <section className="features">
                  <p>Our event planner offers a variety of features to help you manage your events effectively:</p>
                  <p className = "author" > - Emily Johnson</p>
                    </section>
                    <section className="testimonials">
                        <p>"Event Planner made organizing my wedding so much easier! Highly recommend!" - Sarah J.</p>
                        <p className = "author">- Michael B.</p>
                        </section>
                        <section className="contact">
                          <h2>Contact Us</h2>
                          <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" required></textarea>
                            <button className ="submit-button">Send Message</button>
                          </form>
                            </section>
        </div>
    );
};

export default EventPlanner;
