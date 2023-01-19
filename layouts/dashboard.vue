<template>
    <v-app>
        <v-card color="dashboard_bg" class="dl__main_card" style="border-radius: 0 !important;">

            <!-- *** SIDE NAVIGATION BAR *** -->
            <v-navigation-drawer class="dl__drawer" color="navbar_bg" v-model="drawer" :mini-variant.sync="mini" permanent v-if="drawer==true">
                
                <!-- NATHAN DIGITAL SOFTWARE SUET MENU -->
                <div class="pa-0 ma-0 flex_row align-start">
                    <div class="flex_row align-center justify-center text-center" @click.stop="drawer2 = !drawer2" style="background: #e2e7f175 !important;min-width: 50px !important;min-height: 50px !important;max-width: 50px !important;max-height: 50px !important;">
                        <DotedMenu class="text-center ma-0 pa-0 mr-1" style=""/>
                    </div>
                    <h1 class="ml-4 primary--text mt-2 font-weight-black">A . T . S <span class=" subtext--text caption">system</span></h1>
                    <!-- <v-img src="/crm-text.png" class="mt-4 ml-4" max-width="50" max-height="50" style=""></v-img> -->
                </div>    
                
                <!-- NATHAN DIGITAL SOFTWARE SUET MENU BODY -->
                <v-navigation-drawer v-model="drawer2" absolute temporary class="">
                    <div>
                        <div class="pa-0 ma-0 flex_row align-center justify-space-between">
                            <div class="flex_row align-center justify-center text-center" @click.stop="drawer2 = !drawer2" style="background: #fff !important;min-width: 50px !important;min-height: 50px !important;max-width: 50px !important;max-height: 50px !important;">
                                <DotedMenu class="text-center ma-0 pa-0 mr-1 back__icon" style=""/>
                            </div>
                            <div class="flex_row align-center back__txt">
                                <h6 class="subtext--text back__txt" @click.stop="drawer2 = !drawer2">CRM Software</h6>
                                <span class="lighten-5 subtext--text font-weight-black ml-4 mr-5 back__txt" style="font-size: 18px !important">-></span>
                            </div>
                        </div>
                    </div>

                    <!-- Apps -->
                    <div class="flex_column ma-0 pa-0">
                        <h2 class="ml-2 mb-6 nd_sw__title">Apps</h2>
                        <div class="flex_row ml-0 mb-3 pa-3 nd_sw__con" v-for="item in softwares" :key="item">
                            <v-img class="mr-2" src="https://play-lh.googleusercontent.com/yPtnkXQAn6yEahOurxuYZL576FDXWn3CqewVcEWJsXlega_nSiavBvmaXwfTGktGlQ" max-width="35"></v-img>
                            <h6 class="pa-0 ma-0 text--text">{{ item }}</h6>
                        </div>
                        <span class="ml-5 mt-3 subtext--text font-weight-medium nd_sw__all">All apps</span>
                    </div>

                    <!-- News -->
                    <h4 class="ml-2 mb-0 mt-9"># Nathan Digital News </h4>
                    <div class="flex_column justify-lg-space-around mt-0 pt-0 mx-5" v-for="item in news" :key="item">
                        <div class="flex_row nnn__con" >
                            <div class=" lighten-4 blue rounded px-3 py-2 mr-2"><v-icon  class="ma-auto pa-0" color="primary">fa-file</v-icon></div>
                            <div class="flex_column">
                                <h6>{{ item }}</h6>
                                <span class="text--subtext" style="font-size: 12px !important ">Lorem ipsum dolor sit ..</span>
                            </div>
                        </div>
                        <v-divider id="divider"></v-divider>
                    </div>

                    <v-list-item-title class="dl__brand_logo mt-5 mx-auto">
                           <div class="flex_row">
                            <NDlogo />
                            <v-divider class="subtext mx-4" vertical></v-divider>
                            <PoweredByIcon class="" />
                           </div>
                        </v-list-item-title>
                </v-navigation-drawer>

                <!-- LOGO -->
                <!-- <v-list-item class="dl__brand_container">
                    <div class="dl__brand_wrap" :class="{'d-none':mini}">
                        <v-list-item-title class="dl__brand_logo">
                            <NathanDigitalSmallLogo />
                            <v-divider vertical class="subtext mx-3"></v-divider>
                            <CRMLogo />
                        </v-list-item-title>
                    </div>
                </v-list-item> -->

                <!-- LIST -->
                <v-list class="dl__list">
                    <div class="dl__list_div" v-for="(value, index) in items" :key="index">
                        <p class="dl__drawer_topic_link text--text" :class="{'d-none':mini}">{{ value.group }}</p>
                        <v-list-item class="dl__list_item"  v-for="(link,linkindex) in value.links" :key="linkindex" link :to="link.route" @click="handleLinks(link)">
                            <v-list-item-icon class="dl__drawer_list_icon" :class="{mr_0:mini}">
                                <div v-if="link.text == 'Dashboard'" :class="SideNavMaskerValue == 'Dashboard'?'dashboard':''" >
                                    <DB_SideNavMasker v-show="SideNavMaskerValue == 'Dashboard'" class="side_nav__masker" />
                                    <DashboardIcon  class="side_nav_icons" />
                                </div>
                                <div v-if="link.text == 'Requisitions'" :class="SideNavMaskerValue == 'Sales'?'sales':''">
                                    <SAL_SideNavMasker v-show="SideNavMaskerValue == 'Pipeline'"   class="side_nav__masker" />
                                    <PipelineIcon class="side_nav_icons"/>
                                </div>
                                <div v-if="link.text == 'Activities'" :class="SideNavMaskerValue == 'Expenses'?'Expenses':''">
                                    <EXP_SideNavMasker v-show="SideNavMaskerValue == 'Activities'" class="side_nav__masker" />
                                    <ActivitiesIcon class="side_nav_icons"/>
                                </div>
                                <div v-if="link.text == 'Clients'" :class="SideNavMaskerValue == 'Chart of Accounts'?'ChartofAccounts':''">
                                    <COA_SideNavMasker v-show="SideNavMaskerValue == 'Email'" class="side_nav__masker" />
                                    <EmailsIcon class="side_nav_icons"/>
                                </div>
                                <div v-if="link.text == 'Orders'" :class="SideNavMaskerValue == 'Reports'?'Dashboard':''">
                                    <DB_SideNavMasker v-show="SideNavMaskerValue == 'Orders'" class="side_nav__masker" />
                                    <OrdersIcon  class="side_nav_icons" />
                                </div>
                                <div v-if="link.text == 'Customers'" :class="SideNavMaskerValue == 'Banking'?'Sales':''">
                                    <SAL_SideNavMasker v-show="SideNavMaskerValue == 'Customers'" class="side_nav__masker" />
                                    <CustomersIcon   class="side_nav_icons"/>
                                </div>
                                <div v-if="link.text == 'Reports'" :class="SideNavMaskerValue == 'Alerts'?'Expenses':''">
                                    <EXP_SideNavMasker v-show="SideNavMaskerValue == 'Reports'" class="side_nav__masker" />
                                    <ReportsIcon  class="side_nav_icons" />
                                </div>
                                <div v-if="link.text == 'Marketing'" :class="SideNavMaskerValue == 'Alerts'?'Expenses':''">
                                    <EXP_SideNavMasker v-show="SideNavMaskerValue == 'Marketing'" class="side_nav__masker" />
                                    <MarketingIcon  class="side_nav_icons" />
                                </div>
                                <div v-if="link.text == 'Calendar'" :class="SideNavMaskerValue == 'Alerts'?'Expenses':''">
                                    <EXP_SideNavMasker v-show="SideNavMaskerValue == 'Calendar'" class="side_nav__masker" />
                                    <CalendarIcon  class="side_nav_icons" />
                                </div>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="dl_drawer_link subtext--text" color="text">{{ link.text }}</v-list-item-title>              
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-list>

                <v-spacer class="spacer small_spacer "></v-spacer>
                <!-- FOOTER -->
                <div class="dl__side_footer">
                    <div class="dl__side_footer_brand_wrap" :class="{'d-none':mini}">
                        <PoweredByIcon />
                    </div>
                    <div class=" pb-0 ">
                        <v-btn class="miniClose" icon @click.stop="mini = !mini" small>
                        <v-icon v-if="mini==true" color="text" small>fa-chevron-right</v-icon>
                        <v-icon v-else color="text" small>fa-chevron-left</v-icon>
                        </v-btn>
                        <!-- <v-btn class="closeDrawerOnMobileBtn" icon @click="drawer = !drawer">
                            <v-icon color="text">fa-chevron-left</v-icon>
                        </v-btn> -->
                    </div>
                </div>
            </v-navigation-drawer>
            <!-- *** / SIDE NAVIGATION BAR *** -->



            <!-- *** TOP NAVIGATION BAR *** -->
            <main class="dl__main">
                <div class="dl__headNav" :class=" darkMood==false ? 'white' : 'dashboard_bg' ">
                    
                    <!-- FIRST ROW -->
                    <div class="dl__header flex_row">
                        
                        <!-- MOBILE OPEN NAV BTN -->
                            <!-- <v-btn class="openDrawerOnMobileBtn" icon @click="openDrawerOnMobileBtn">
                            <v-icon color="text">fa-chevron-right</v-icon>
                            </v-btn> -->
                        <!-- / MOBILE OPEN NAV BTN -->


                        <!-- DIV-1 -->
                            <!-- DATE + PAGE NAME -->
                            <div class="dn__header flex_column">
                                <p v-if="$nuxt.$route.name == 'dashboard'" class="subtext--text ma-0 pa-0">Sunday, August 16</p>
                                <h2 v-if="$nuxt.$route.name != 'dashboard'" class="text--text ma-0 pa-0" style="text-transform: capitalize;">{{ $nuxt.$route.name }}</h2>
                            </div>
                            <!-- / DATE + PAGE NAME -->



                            <!-- TABS -->
                            <div class="tabs__header_con">
                                <HeaderTabs @tabValue="handleTabValue($event)" v-if="$nuxt.$route.name == 'sales'" :data="tabs_data.sales" />
                            </div>
                            <!-- / TABS -->

                            <v-spacer></v-spacer>



                            <!-- ACTION BUTTONS -->
                            <div class="dl__header_actions flex_row">
                                <v-btn icon color="outline"><ReloadIcon class="them_icon" @click.stop="refresh" /></v-btn>
                                <v-btn icon color="outline" @click.stop="toggleTheme"><ThemeIcon class="them_icon" /></v-btn>
                                <v-btn icon color="outline" to="/alerts"><CalendarIconGrey class="them_icon" /></v-btn>
                                <v-btn icon color="outline" to="/alerts"><NotificationIcon class="them_icon" /></v-btn>
                                <div class="flex_row mr-7" @click.stop="settingMenu=true">
                                    <v-avatar size="35" color="#EDEEF2">
                                        <v-icon color="subtext" x-small>fa-user</v-icon>
                                    </v-avatar>
                                    <LightArrow class="ml-2 icon_container" style="width: 10px !important;" />
                                </div>          
                            </div>
                            <!-- / ACTION BUTTONS -->

                        <!-- / DIV-1 -->
                    </div>


                </div>
                <div class="dl__content">
                <Nuxt />
                </div>
            </main>
            <!-- *** / TOP NAVIGATION BAR *** -->

        </v-card>
    </v-app>
</template>

<script>
import '@/assets/scss/layouts/_dashboardLayout.scss'

import DB_SideNavMasker from '@/assets/images/DashboardLayout/SideNavMasker/Dashboard.svg'
import SAL_SideNavMasker from '@/assets/images/DashboardLayout/SideNavMasker/Sales.svg'
import EXP_SideNavMasker from '@/assets/images/DashboardLayout/SideNavMasker/Expenses.svg'
import COA_SideNavMasker from '@/assets/images/DashboardLayout/SideNavMasker/ChartOfAccounts.svg'
import CUS_SideNavMasker from '@/assets/images/DashboardLayout/SideNavMasker/Customers.svg'

import DashboardIcon from '@/assets/images/DashboardLayout/Dashboard-icon.svg'
import PipelineIcon from '@/assets/images/DashboardLayout/Pipeline-icon.svg'
import ActivitiesIcon from '@/assets/images/DashboardLayout/Activities-icon.svg'
import EmailsIcon from '@/assets/images/DashboardLayout/Emails-icon.svg'
import OrdersIcon from '@/assets/images/DashboardLayout/Orders-icon.svg'
import CustomersIcon from '@/assets/images/DashboardLayout/Customers-icon.svg'
import ReportsIcon from '@/assets/images/DashboardLayout/Reports-icon.svg'
import SupportIcon from '@/assets/images/DashboardLayout/Support-icon.svg'
import SettingsIcon from '@/assets/images/DashboardLayout/Settings-icon.svg'
import CalendarIcon from '@/assets/images/DashboardLayout/Calendar-icon.svg'
import CalendarIconGrey from '@/assets/images/DashboardLayout/Calendar-icon copy.svg'
import NotificationIcon from '@/assets/images/DashboardLayout/Notification-icon.svg'
import MarketingIcon from '@/assets/images/DashboardLayout/Marketing-icon.svg'
import DotedMenu from '@/assets/images/DashboardLayout/DotsMenu.svg'
import NDlogo from '@/assets/images/DashboardLayout/Accounting-logo copy.svg'

import CRMLogo from '@/assets/images/DashboardLayout/crm-logo.svg'
import NathanDigitalSmallLogo from '@/assets/images/DashboardLayout/nd-logo.svg'
import PoweredByIcon from '@/assets/images/DashboardLayout/PoweredBy-icon.svg'
import ThemeIcon from '@/assets/images/DashboardLayout/Theme-icon.svg'
import ReloadIcon from '@/assets/images/DashboardLayout/Reload-icon.svg'
import SettingIcon from '@/assets/images/DashboardLayout/setting-icon.svg'
import PrivacyIcon from '@/assets/images/DashboardLayout/Privacy-icon.svg'
import LightArrow from '@/assets/images/Light-Arrow-icon.svg'

import AccountsDropDownMenu from '@/components/Layout/AccountsDropDownMenu/index.vue'
import HeaderTabs from '@/components/Layout/HeaderTabs/index.vue'
import CardWithIcon from '@/components/Cards/CardWithIcon/index.vue'



export default {
    name: 'dashboard',
    components: {
        DotedMenu,
        NDlogo,
        LightArrow,
        NotificationIcon,
        CalendarIconGrey,
        CalendarIcon,
        MarketingIcon,
        DB_SideNavMasker ,
        SAL_SideNavMasker,
        EXP_SideNavMasker,
        COA_SideNavMasker,
        CUS_SideNavMasker,
        CRMLogo,
        DashboardIcon,
        NathanDigitalSmallLogo,
        CustomersIcon,
        EmailsIcon,
        ActivitiesIcon,
        PoweredByIcon,
        OrdersIcon,
        PipelineIcon,
        SettingsIcon,
        SupportIcon,
        ReloadIcon,
        SettingIcon,
        ReportsIcon,
        ThemeIcon,
        PrivacyIcon,
        AccountsDropDownMenu,
        HeaderTabs,
        CardWithIcon,
    },
    data() {
        return {
            news: ['New version of CRM', 'Traders on Fires..', 'Updating UX'],
            softwares: ['Accounting Software', 'Tasks Management', 'CRM Software', 'Others' ],
            drawer: null,
            items: [
                { title: 'Home', icon: 'mdi-view-dashboard' },
                { title: 'About', icon: 'mdi-forum' },
            ],
            swMenuDialog: false,
            settingMenu: false,
            tab_current_val: 'all',
            tabs_data: {
                sales: [
                    { title: 'All Sales', value: 'all' },
                    { title: 'Invoices', value: 'invoices' },
                    { title: 'Products/Services', value: 'products' },
                    { title: 'Forecast', value: 'forecast' },
                ],
                expenses: [
                    { title: 'All Expenses', value: 'all' },
                    { title: 'Suppliers', value: 'suppliers' },
                    { title: 'Forecast', value: 'forecast' },
                    { title: 'Expense Breakdown', value: 'breakdown' },
                    { title: 'Reimbursement', value: 'reimbursement' },
                ],
            },
            darkMood: false,
            balance_cards: [
                { name: 'EmiratesNBD', amount: '58,45,652', color: 'accent3' },
                { name: 'Dubai Islamic', amount: '65,78,563', color: 'accent2' },
                { name: 'RAK Bank', amount: '78,58,522.0', color: 'primary' },
                { name: 'ADCB Bank', amount: '12,45,125', color: 'accent1' },
            ],
            SideNavMaskerValue: 'Dashboard',
            drawer: true,
            drawer2: false,
            mini: false,
            items: [
                {
                group: 'MENU',
                links: [
                    {
                    text: 'Dashboard',
                    icon: 'DashboardIcon',
                    iconsrc: '@/assets/images/DashboardLayout/Dashboard-icon.svg',
                    marker: 'DB_SideNavMasker',
                    route: '/dashboard'
                    },
                    {
                    text: 'Requisitions',
                    icon: 'PipelineIcon',
                    iconsrc: '@/assets/images/DashboardLayout/Dashboard-icon.svg', 
                    marker: 'SAL_SideNavMasker',
                    route: '/requisitions'
                    },
                    {
                    text: 'Clients',
                    icon: 'ActivitiesIcon',
                    iconsrc: '@/assets/images/DashboardLayout/Dashboard-icon.svg',
                    marker: 'EXP_SideNavMasker',
                    route: '/clients'
                    },
                    {
                    text: 'Reports',
                    icon: 'EmailsIcon',
                    iconsrc: '@/assets/images/DashboardLayout/Dashboard-icon.svg',
                    marker: 'COA_SideNavMasker',
                    route: '/reports'
                    },
                ]
                },
            ],
            accounts: [
                { name: 'Account One'},
                { name: 'Account Two'},
                { name: 'Account Three'},
                { name: 'Add New'},
            ],
        }
    },
    methods: {
        handleSWMenuDialog() {
            this.swMenuDialog = true
        },
        handleTabValue(payload) {
            
            console.log("Emitted Value from HeaderTabs Component  ==> ", payload)
            
            // Setting the payload value
            this.tab_current_val = payload

            // Setting the payload value in the localStorage under name selected_tab
            localStorage.setItem("selected_tab", payload);

            // Emitting an event call tabChanged with the tab current value
            this.$nuxt.$emit("tabChanged" ,payload)

        },
        handleLinks(value) {
            this.SideNavMaskerValue = value.text
        },
        refresh() {
            console.log('page refreshed...')
        },
        toggleTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            this.darkMood = !this.darkMood;
        }
    },
}
</script>