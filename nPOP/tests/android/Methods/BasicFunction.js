
class BasicFunctions {
    get closeBtnSelector(){
        return $('~Prejsť nahor')
    }
    get confirmBtnSelector() {
        return $('//*[@text="POTVRDIŤ"]')
    }


    async closeBtn(){
        await this.closeBtnSelector.click()
    }

    async confirmBtnClick(){
        await this.confirmBtnSelector.click()
    }

}
export default new BasicFunctions