/* eslint-disable react/no-unescaped-entities */
export default function Article() {
  return (
    <section className='article-section'>
        <img  src='/images/imaImage7.png' className='article-img'/>
        <div className='article-text'>
            <h3>Introducing Billia AI:
                <br/> Smarter, Faster, Personal
            </h3>
            <p>From paying school fees to buying airtime or electricity, <br/> Billia AI makes every payment smarter, faster, and <br/> stress-free - just by asking</p>
            <div className='article-points'>
            <h5><span><img src='/images/Group.png' className='article-icons'/></span> Pay Bills by typing a command</h5>
            <p>Just say "Pay my WAEC fees" or "Buy airtime for 0803..." no need to search or fill endless forms.</p>
            </div>
            <div className='article-points'>
            <h5><span><img src='/images/Vector (1).png' className='article-icons'/></span>One-Tap Repeats</h5>
            <p>AI remebers syour past payments so you can repeat them in seconds - no <br/> retyping required.</p>
            </div>
            <div className='article-points'>
            <h5><span><img src='/images/Vector (2).png' className='article-icons'/></span>In-App Chat Assistance</h5>
            <p>AI remebers your past payments so you can repeat them in seconds - no <br/> retyping required.</p>
            </div>
        </div>
    </section>
  )
}
