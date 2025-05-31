
const Skill = () => {
  return (
    <div id="skills" className="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 min-h-500"
        style={{ backgroundColor: "#021C1E" }}>
        <article data-page="about" className="mx-auto max-w-screen-lg">
            <header>
                <div className="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
                    <div className="h-[1px] w-10 bg-amber-200 md:w-20" data-aos="zoom-in-left" data-aos-duration="600">
                    </div>
                    &nbsp; Skills
                </div>
            </header>
            <section>
                <div>
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
                        <li className="mr-2">
                            <button id="btn-tech-stack"
                                className="inline-block px-4 py-3 rounded-lg hover:text-white text-amber-200 bg-amber-200 bg-opacity-10">Tech
                                Stack</button>
                        </li>
                        <li className="mr-2">
                            <button id="btn-tools"
                                className="inline-block px-4 py-3 rounded-lg hover:text-white">Tools</button>
                        </li>
                    </ul>
                </div>
                <div>
                    {/* Tech Stack Section  */}
                    <div id="tech-stack-content"
                        className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
                        {/* HTML  */}
                        <div>
                            <div
                                className="sadow item-tech flex cursor-pointer items-center gap-2 rounded border border-gray-300 px-2 py-2 hover:bg-gray-300 hover:bg-opacity-10 md:gap-3 lg:px-3">
                                <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
                                    <img alt="HTML"
                                        className="img-tech  transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                                        src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png"/>
                                </div>
                                <div className="flex items-center text-sm md:text-base lg:text-lg">
                                    <div className="tech font-medium text-secondary transition-all duration-300">HTML</div>
                                    <div
                                        className="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                                        Advanced</div>
                                </div>
                            </div>
                        </div>
                        {/* CSS  */}
                        <div>
                            <div
                                className="sadow item-tech flex cursor-pointer items-center gap-2 rounded border border-gray-300 px-2 py-2 hover:bg-gray-300 hover:bg-opacity-10 md:gap-3 lg:px-3">
                                <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
                                    <img alt="CSS"
                                        className="img-tech  transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                                        src="https://cdn-icons-png.flaticon.com/512/732/732190.png"/>
                                </div>
                                <div className="flex items-center text-sm md:text-base lg:text-lg">
                                    <div className="tech font-medium text-secondary transition-all duration-300">CSS</div>
                                </div>
                            </div>
                        </div>
                        {/* PHP  */}
                        <div>
                            <div
                                className="sadow item-tech flex cursor-pointer items-center gap-2 rounded border border-gray-300 px-2 py-2 hover:bg-gray-300 hover:bg-opacity-10 md:gap-3 lg:px-3">
                                <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
                                    <img alt="PHP"
                                        className="img-tech  transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                                        src="https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png"/>
                                </div>
                                <div className="flex items-center text-sm md:text-base lg:text-lg">
                                    <div className="tech font-medium text-secondary transition-all duration-300">PHP</div>
                                </div>
                            </div>
                        </div>
                        {/* Laravel  */}
                        <div>
                            <div
                                className="sadow item-tech flex cursor-pointer items-center gap-2 rounded border border-gray-300 px-2 py-2 hover:bg-gray-300 hover:bg-opacity-10 md:gap-3 lg:px-3">
                                <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
                                    <img alt="Laravel"
                                        className="img-tech  transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                                        src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg"/>
                                </div>
                                <div className="flex items-center text-sm md:text-base lg:text-lg">
                                    <div className="tech font-medium text-secondary transition-all duration-300">Laravel
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Python  */}
                        <div>
                            <div
                                className="sadow item-tech flex cursor-pointer items-center gap-2 rounded border border-gray-300 px-2 py-2 hover:bg-gray-300 hover:bg-opacity-10 md:gap-3 lg:px-3">
                                <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
                                    <img alt="Python"
                                        className="img-tech  transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                                        src="/assets/python.svg"/>
                                </div>
                                <div className="flex items-center text-sm md:text-base lg:text-lg">
                                    <div className="tech font-medium text-secondary transition-all duration-300">Python
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Bootstrap  */}
                        <div>
                            <div
                                className="sadow item-tech flex cursor-pointer items-center gap-2 rounded border border-gray-300 px-2 py-2 hover:bg-gray-300 hover:bg-opacity-10 md:gap-3 lg:px-3">
                                <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
                                    <img alt="Bootstrap"
                                        className="img-tech  transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                                        src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png"/>
                                </div>
                                <div className="flex items-center text-sm md:text-base lg:text-lg">
                                    <div className="tech font-medium text-secondary transition-all duration-300">Bootstrap
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tailwind */}
                        <div>
                            <div
                                className="sadow item-tech flex cursor-pointer items-center gap-2 rounded border border-gray-300 px-2 py-2 hover:bg-gray-300 hover:bg-opacity-10 md:gap-3 lg:px-3">
                                <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
                                    <img alt="Tailwind"
                                        className="img-tech  transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"/>
                                </div>
                                <div className="flex items-center text-sm md:text-base lg:text-lg">
                                    <div className="tech font-medium text-secondary transition-all duration-300">Tailwind
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Tools Section */}
                    <div id="tools-content"
                        className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12 hidden">
                        {/* Example Tool  */}
                        <div className="sadow">
                            <div
                                className="sadow item-tech flex cursor-pointer items-center gap-2 rounded border border-gray-300 px-2 py-2 hover:bg-gray-300 hover:bg-opacity-10 md:gap-3 lg:px-3">
                                <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
                                    <img alt="Database"
                                        className="img-tech  transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png"/>
                                </div>
                                <div className="flex items-center text-sm md:text-base lg:text-lg">
                                    <div
                                        className="tech font-medium text-secondary transition-all duration-300 translate-y-0">
                                        MySql</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className="sadow item-tech flex cursor-pointer items-center gap-2 rounded border border-gray-300 px-2 py-2 hover:bg-gray-300 hover:bg-opacity-10 md:gap-3 lg:px-3">
                                <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
                                    <img alt="GitHub"
                                        className="img-tech  transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
                                </div>
                                <div className="flex items-center text-sm md:text-base lg:text-lg">
                                    <div
                                        className="tech font-medium text-secondary transition-all duration-300 translate-y-0">
                                        Github</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className="sadow item-tech flex cursor-pointer items-center gap-2 rounded border border-gray-300 px-2 py-2 hover:bg-gray-300 hover:bg-opacity-10 md:gap-3 lg:px-3">
                                <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
                                    <img alt="Git"
                                        className="img-tech  transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                                        src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"/>
                                </div>
                                <div className="flex items-center text-sm md:text-base lg:text-lg">
                                    <div
                                        className="tech font-medium text-secondary transition-all duration-300 translate-y-0">
                                        Git</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    </div>
  )
}

export default Skill
