import './Banner.css';


export const Banner = () => {
    return (
        <div>
            <img  className= 'banner'src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSyjPVzNxzilpZ2iNChzS-9u8HPvl_V2-p_qbDsjqMs4DECDMKn" alt="" />
            <div >
             <h1 id='uniq'>Let Your Home <br/> Be Unique</h1>
             <h5 id='be'>There are many variations of the passages of lorem Ipsum <br/> fromavailable,variations of the passages.</h5>
            </div>
            <div>
                <button className='btn-banner'>Get Started</button>
            </div>

        </div>
    );
}

