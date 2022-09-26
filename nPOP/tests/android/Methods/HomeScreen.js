export let roleSelector

class HomeScreen {

    get MainUserLoginBtnSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/iv_layout_main_user_login"]')
    }
    get LoginNameSelector (){
        return  $('//*[@resource-id="sk.prosoft.ptt.pop:id/et_login_name"]')
    }
    get LoginPasswordSelector (){
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/et_login_pass"]')
    }
    get LoginInBtn (){
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/btn_login"]')
    }
    get RoleSelectionContinue (){
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/btn_activity_role_selection_continue"]')
    }
    

    async Login(name, password, role) {
        await this.MainUserLoginBtnSelector.click()
        await this.LoginNameSelector.setValue(name)
        await this.LoginPasswordSelector.setValue(password)
        await this.LoginInBtn.click()
        roleSelector = $('//*[@text="'+role+'"]')
        await roleSelector.click()
        await this.RoleSelectionContinue.click()
    }


}


export default new HomeScreen() 