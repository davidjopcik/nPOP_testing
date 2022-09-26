class EvodMainScreen {
    get mainEvodSelector(){
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/cv_main_evod"]')
    }
    get (){
        return $('//*[@resource-id=""]')
    }

    async evodOpen(){
        await this.mainEvodSelector.click()
    }

}
export default new EvodMainScreen