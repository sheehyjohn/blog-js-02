const siteMetadata = {
    title: `people i technologii`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.png`,
    ogImage: `/images/wall.png`,
    twoColumnWall: true,
    introTag: `creative | frontEnd | conference `,
    description: `the voluntary and other interests of a stay at home dad`,
    //about:
    //    "Cras accumsan a lectus at tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus elementum dapibus dictum. Mauris auctor quam nec est tincidunt hendrerit. Donec pulvinar lobortis mauris. Cras vulputate ullamcorper ligula a rhoncus. Nunc venenatis elementum ligula in semper. Mauris malesuada purus nunc, et ultricies leo aliquam ac. Ut sit amet nunc id magna accumsan hendrerit in eget metus.",
    about: "so much of our lives can be extended into the internet so in creating a page I'm really only creating the one place that all my accounts are listed, as the different services overlap to weave out the veen diagrams of composite avatars that we may be....",
    author: `@_akzhy`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "CODE",
            url: "/code",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
        {
            name: "GitHub",
            url: "https://github.com/sheehyjohn",
        },
    ],
    social: [
         
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "#",
        },
         
        {
            name: "GitHub",
            icon: "/images/Twitter.svg",
            url: "#",
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "#",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "#",
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "#",
        },
        {
            name: "SoundCloud",
            icon: "/images/Youtube.svg",
            url: "#",
        },
        {
            name: "Flickr",
            icon: "/images/Youtube.svg",
            url: "#",
        },
        {
            name: "Patreon",                    //25% to fairy garden
            icon: "/images/Youtube.svg",        //25% place will remain open to suggested payment
            url: "#",
        },
        {
            name: "Spotify",
            icon: "/images/Youtube.svg",
            url: "#",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://getform.io/f/f227a36e-096a-4c6a-9963-9f1918a85bb3",
        description: ` `,
        mail: "sheehy.john@gmail.com",
        phone: "086 021 1255",
        address: "Cork \nMunster \nRepulic of Ireland \nEuropean Union",
    },
    disqus: "elemental-netlify-com",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
