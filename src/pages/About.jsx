function About() {
    return (
        <div className="mx-2">
            <h1 className="text-6xl mb-4">Github Finder</h1>
            <p className="mb-4 text-2xl ">
                A React app to search Github profiles and see profile details. This project
                is part of the <a href="https://www.udemy.com/course/modern-react-front-to-back">
                {' '}
                    React Front to Back 
                {' '}
                </a>
                Udemy course by
                <strong>
                    <a href="https://traversymedia.com"> Brand Traversy</a>
                </strong>
                .
            </p>
            <p className="text-lg text-gray-400">
                Version <span>1.0.0</span>
                <br />
                Layout used:
                <a className="text-black" href="https://daisyui.com/"> DaisyUI</a>
            </p>
        </div>
    );
}

export default About;