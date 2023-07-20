import { Icon } from "@iconify/react"
import { FooterWrap } from "./styled"

export const Footer = () => {
    return <footer className="text-gray-500 body-font">
        <div className="bg-gray-100">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">@nazzzo</p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <a href="https://velog.io/@kj_code00" className="text-gray-500">
                        <Icon icon="simple-icons:velog" className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/nazzzo/nazzzo.github.io" className="ml-3 text-gray-500">
                        <Icon icon="bi:github" className="w-5 h-5" />
                    </a>
                </span>
            </div>
        </div>
    </footer>
}

