<template>
  <v-row class="dashboard_wrapper mb-9">
    <!-- WELCOME DIALOG -->
    <v-dialog v-model="welcomeDialog" persistent max-width="70vw">
      <v-card id="card">
        <v-row align="center" justify="center">
          <h1 class="text-center ma-9">Welcome to Nathan & Nathan ATS System</h1>
        </v-row>
        <v-row align="center" justify="center" class="my-9 mx-0">
          <v-col cols="4" class="ml-6">
            <v-img src="/Login/crm-preview.png" max-width="450" class="mx-auto"></v-img>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="7" class="pa-0 ma-0">
            <v-row class="pa-0 ma-0">
              <v-col cols="6"  class="mb-9">
                <v-icon large color="primary" class="ma-3">fa-folder</v-icon>
                <div>
                  <span class="text--text font-weight-medium" style="text-decoration: underline">Hello organised</span>
                  <br />
                  <span class="subtext--text">Stay on top of your orders and quantities while managing your inventory in real-time.</span>
                </div>
              </v-col>
              <v-col cols="6"  class="mb-9">
                <v-icon large color="primary" class="ma-3">fa-clock</v-icon>
                <div>
                  <span class="text--text font-weight-medium" style="text-decoration: underline">Free up time</span>
                  <br />
                  <span class="subtext--text">Stay on top of your orders and quantities while managing your inventory in real-time.</span>
                </div>
              </v-col>
              <v-col cols="6"  class="mb-9">
                <v-icon large color="primary" class="ma-3">fa-file</v-icon>
                <div>
                  <span class="text--text font-weight-medium" style="text-decoration: underline">Claim everything</span>
                  <br />
                  <span class="subtext--text">Stay on top of your orders and quantities while managing your inventory in real-time.</span>
                </div>
              </v-col>
              <v-col cols="6"  class="mb-9">
                <v-icon large color="primary" class="ma-3">fa-check</v-icon>
                <div>
                  <span class="text--text font-weight-medium" style="text-decoration: underline">Unlimited support</span>
                  <br />
                  <span class="subtext--text">Stay on top of your orders and quantities while managing your inventory in real-time.</span>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row align="center" justify="end" class="px-3">
          <v-checkbox color="primary" label="I accept the polices.." class=""></v-checkbox>
          <v-spacer></v-spacer>
          <v-btn color="primary" class="tall__btn px-9" @click="welcomeDialog=false">Continue</v-btn>
        </v-row>
      </v-card>
    </v-dialog>
    <!-- TOP FILTER CARDS -->
    <div class="topSmallCards flex_row justify-space-between">
      <Filters :data="filters" />
      <v-card  color="card_bg" class="flat ma-0 pa-0 mx-2 px-3 py-2" elevation="0" style="max-width: 200px !important; height: 77px !important; max-height: 100% !important; border-radius: 10px !important; border: 0px solid #fff!important;" :style=" darkMood == true ? '' : 'border: 0.5px solid #E2E7F1 !important;'">
        <div class="" style="max-width: 200px !important; ">
          <label style="color:#7692AA !important; font-size: 12px !important; font-weight: 600 !important;" class="pl-2">Month & Year</label>
          <v-menu v-model="month_year_menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="month_year_date" placeholder="All" solo flat hide-details dense v-bind="attrs" v-on="on" />
            </template>
            <v-date-picker v-model="month_year_date" @input="month_year_menu = false" />
        </v-menu>
        </div>
      </v-card>
    </div>
    <v-row class="row1" >
      <!-- RECUTTING FUNNEL -->
      <v-col sm="12" md="6" lg="6">
        <v-card color="card_bg" id="card">
          <v-card-title id="card-title">
            <h4 class="text--text">Recruiting Funnel</h4>
          </v-card-title>
          <v-card-text id="card-text" :class="privacyMood ? 'privacyMood' : ''">
            <v-row class="ex_br__con flex_row align-center justify-space-around">
              <v-col class="d-flex align-center justify-center" cols="7">
                <!-- <div class="recruiting_funnel_chart" style="min-width: 100px; min-height: 100px"></div> -->
                <!-- <v-row>
                <line-chart
                class="text--text"
                ref="lineChart"
                :chart-data="lineChartData"
                :colors="lineChartColors"
                :chart-options="lineChartOptions"
                :height="420"
                />
              </v-row> -->
              <!-- <v-row> -->
                <!-- <doughnut-chart
                  :chart-data="doughnutChartData"
                  :chart-options="doughnutChartOptions"
                  :colors="doughnutColors"
                  label="hide"
                /> -->
              <!-- </v-row>
                <v-row>
                <pie-chart 
                :chart-data="pieChartData" 
                :chart-options="pieChartOptions" 
                :colors="pieColors"
                height="420"
                />
              </v-row> -->
              <!-- FUNNEL CUSTOM CHART  -->
                <FunnelChart/>
              </v-col>
              <v-col cols="5">
                <div class="flex_row align-start justify-space-between">
                  <div class="1">
                    <div class="flex_column">
                    <h6 class="subtext--text font-weight-light">Applications</h6>
                    <div class="flex_row mt-3">
                      <div class="accent2 lines_color mr-2 flex_column" style="min-width: 3px; min-height: 20px; border-radius: 3px"></div>
                      <span style="color: #000027 !important; font-size: 16px !important; font-weight: 600 !important;" class="text--text pl-3">480</span>
                    </div>
                  </div>
                  <div class="flex_column mt-5">
                    <h6 class="subtext--text font-weight-light">Qualified</h6>
                    <div class="flex_row mt-3">
                      <div class="primary lines_color mr-2 flex_column" style="min-width: 3px; min-height: 20px; border-radius: 3px"></div>
                      <span style="color: #000027 !important; font-size: 16px !important; font-weight: 600 !important;" class="text--text pl-3">480</span>
                    </div>
                  </div>
                  <div class="flex_column mt-5">
                    <h6 class="subtext--text font-weight-light">Submitted</h6>
                    <div class="flex_row mt-3">
                      <div class="accent4 lines_color mr-2 flex_column" style="min-width: 3px; min-height: 20px; border-radius: 3px"></div>
                      <span style="color: #000027 !important; font-size: 16px !important; font-weight: 600 !important;" class="text--text pl-3">480</span>
                    </div>
                  </div>
                  </div>
                  <div class="2">
                    <div class="flex_column">
                    <h6 class="subtext--text font-weight-light">Interviews</h6>
                    <div class="flex_row mt-3">
                      <div class="accent2 lines_color mr-2 flex_column" style="min-width: 3px; min-height: 20px; border-radius: 3px"></div>
                      <span style="color: #000027 !important; font-size: 16px !important; font-weight: 600 !important;" class="text--text pl-3">480</span>
                    </div>
                  </div>
                  <div class="flex_column">
                    <h6 class="subtext--text font-weight-light">Selections</h6>
                    <div class="flex_row mt-3">
                      <div class="accent2 lines_color mr-2 flex_column" style="min-width: 3px; min-height: 20px; border-radius: 3px"></div>
                      <span style="color: #000027 !important; font-size: 16px !important; font-weight: 600 !important;"  class="text--text pl-3">480</span>
                    </div>
                  </div>
                  <div class="flex_column mt-5">
                    <h6 class="subtext--text font-weight-light">Placements</h6>
                    <div class="flex_row mt-3">
                      <div class="primary lines_color mr-2 flex_column" style="min-width: 3px; min-height: 20px; border-radius: 3px"></div>
                      <span style="color: #000027 !important; font-size: 16px !important; font-weight: 600 !important;" class="text--text pl-3">480</span>
                    </div>
                  </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- REQUEST BREAKDOWN -->
      <v-col sm="12" md="6" lg="6">
        <v-card color="card_bg" id="card">
          <v-card-title id="card-title">
            <h4 >Request Breakdown</h4>
          </v-card-title>
          <v-card-text id="card-text" class="">
            <v-row class="ma-0 pa-0 mb-3" justify="center" v-for="item in request_breakdown" :key="item">
              <v-col cols="3" class="ma-0 pa-0" align-self="center">
                <h4 class="subtext--text font-weight-light ma-auto">{{ item.name  }}</h4>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="9" class="ma-0 pa-0" align-self="center">
                <div class="flex_row ">
                  <div class="" style="background: #E3E4E6;width: 100%;height: 30px;border-radius: 6px;">
                    <div :class="item.color" :style="{ width: item.per }" style="height: 30px;border-radius: 6px;"></div>
                  </div>
                  <h6 class="text--text d-inline pl-2">{{ item.num }}</h6>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Placements Overview Summary -->
      <v-col sm="12" md="6" lg="6">
        <v-card color="card_bg" id="card">
          <v-card-title id="card-title">
            <h4>Placements Overview Summary</h4>
          </v-card-title>
          <v-card-text id="card-text">
            <div class="top_green_cards flex_row justify-space-around">
              <div class="rounded pa-3 flex_row justify-space-around" style="background: #C9FFF1;">
                <span class="text-text mr-9" style="color: #2A2A2A;">Dept. Placements</span>
                <span class="success--text ml-9">16</span>
              </div>
              <div class="rounded pa-3 flex_row justify-space-around" style="background: #C9FFF1;">
                <span class="green-text mr-9" style="color: #2A2A2A;">Dept. Value</span>
                <span class="green--text ml-9">AED 150,650</span>
              </div>
            </div>
            <v-simple-table class="customersByOverDueAmount__table table_bg mt-5">
              <template v-slot:default>
                <thead class="customersByOverDueAmount__thead">
                  <tr class="customersByOverDueAmount__tr">
                    <th class="customersByOverDueAmount__th text-left subtext--text h6 pr_5">
                      Recruiter<br/>Name
                    </th>
                    <th class="customersByOverDueAmount__th text-left subtext--text h6 pr_5">
                      Total<br/>Placements
                    </th>
                    <th class="customersByOverDueAmount__th text-left subtext--text h6 pr_5">
                      Billing VS<br/>Targets
                    </th>
                    <th class="customersByOverDueAmount__th text-right subtext--text h6 pr_5">
                      Average<br/>Billing
                    </th>
                  </tr>
                  <div class="my-4"></div>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in customers_by_overdue" :key="index" class="ma-0 pa-0">
                    <td class="customersByOverDueAmount__td text-left text--text h6">{{ item.name }}</td>
                    <td class="customersByOverDueAmount__td text-left text--text pr_5">{{ item.total_placements }}</td>
                    <td class="customersByOverDueAmount__td text-left text--text pr_5 balance_due__td">
                      <div class="rounded flex_row justify-center" style="background: #1AD598;min-width: 90%;max-width: 90%;min-height: 65%;max-height: 65%;overflow: hidden;">
                        <!-- global class removed from span  "caption" -->
                          <span class=" black--text">AED{{ item.total_billing }}</span>
                      </div>
                    </td>
                    <td class="customersByOverDueAmount__td text-right text--text pr_5">{{ item.average_billing }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Pipeline Overview -->
      <v-col sm="12" md="6" lg="6">
        <v-card color="card_bg" id="card">
          <v-card-title id="card-title">
            <h4>Pipeline Overview</h4>
          </v-card-title>
          <v-card-text id="card-text">
            <div class="top_green_cards flex_row justify-space-around">
              <div class="rounded pa-3 flex_row justify-space-around" style="background: #E6F4FF;">
                <span class="blue-text mr-9">Dept. Placements</span>
                <span class="blue--text ml-9">16</span>
              </div>
              <div class="rounded pa-3 flex_row justify-space-around" style="background: #E6F4FF;">
                <span class="blue-text mr-9">Dept. Value</span>
                <span class="blue--text ml-9">AED 150,650</span>
              </div>
            </div>
            <v-simple-table class="customersByOverDueAmount__table table_bg mt-5">
              <template v-slot:default>
                <thead class="customersByOverDueAmount__thead">
                  <tr class="customersByOverDueAmount__tr">
                    <th class="customersByOverDueAmount__th text-left subtext--text h6 pr_5">
                      Recruiter<br/>Name
                    </th>
                    <th class="customersByOverDueAmount__th text-left subtext--text h6 ">
                      Total<br/>Placements
                    </th>
                    <th class="customersByOverDueAmount__th text-center subtext--text h6 ">
                      Billing VS<br/>Targets
                    </th>
                  </tr>
                  <div class="my-4"></div>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in customers_by_overdue" :key="index" class="ma-0 pa-0">
                    <td class="customersByOverDueAmount__td text-left text--text h6">{{ item.name }}</td>
                    <td class="customersByOverDueAmount__td text-left text--text">{{ item.total_placements }}</td>
                    <td class="customersByOverDueAmount__td text-left text--text  balance_due__td">
                      <div class="rounded flex_row justify-center" style="background: #E6F4FF;min-width: 90%;max-width: 90%;min-height: 65%;max-height: 65%;overflow: hidden;">
                        <!-- global class removed from span  "caption" -->
                          <span class=" blue--text">AED{{ item.total_billing }}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Placement Report -->
      <v-col sm="12" md="12" lg="12">
        <v-card id="card">
          <v-card-title id="card-title">
            <h4>Placement Report</h4>
            <span>Currency: 0 AED</span>
          </v-card-title>
          <v-card-text id="card-text">
            <table class="dashboard_table" style="width:100%">
              <tr class="customersByOverDueAmount__tr">
                    <th class="customersByOverDueAmount__th text-left text--text  h5 " rowspan="2">Name</th>
                    <th class="customersByOverDueAmount__th text-left text--text space--heading h5" colspan="2">Recruitment</th>
                    <th class="customersByOverDueAmount__th text-left text--text space--heading h5" colspan="2">Contract </th>
                    <th class="customersByOverDueAmount__th text-left text--text space--heading h5" colspan="2">Temp</th>
                    <th class="customersByOverDueAmount__th text-left text--text space--heading h5" colspan="2">Freelancer</th>
                    <th class="customersByOverDueAmount__th  text--text space--heading h5"  colspan="2">Total</th>
                  </tr>
              <tr>
                <td class="customersByOverDueAmount__td  text-left subtext--text h5" >Number</td>
                <td class="customersByOverDueAmount__td text-left  subtext--text h5" > Amount</td>
                <td class="customersByOverDueAmount__td text-left  subtext--text h5" >Number</td>
                <td class="customersByOverDueAmount__td text-left  subtext--text h5" > Amount</td>
                <td class="customersByOverDueAmount__td text-left  subtext--text h5" >Number</td>
                <td class="customersByOverDueAmount__td text-left  subtext--text h5" > Amount</td>
                <td class="customersByOverDueAmount__td text-left subtext--text h5" >Number</td>
                <td class="customersByOverDueAmount__td text-left subtext--text h5" > Amount</td>
                <td class="customersByOverDueAmount__td text-left subtext--text h5" >HC</td>
                <td class="customersByOverDueAmount__td text-left subtext--text h5" > Billing</td>
              </tr>
              <tr v-for="(item, index) in placement_report" :key="index" @click="togglerHandle">
                <td class="customersByOverDueAmount__td table__sidebar   name__dropdown text-left text--text">
                  <v-list-group v-model="item.toggler">
                    <!-- <template v-slot:appendIcon><v-icon color="primary" small>fa-plus</v-icon></template> -->
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title style="font-size: 16px;">{{ item.name }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item v-for="item in item.country" :key="item">
                      <v-list-item-content>
                        <v-list-item-title>{{ item }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </td>
                <td class="customersByOverDueAmount__td text-left text--text">
                  <v-list-group v-model="item.toggler" append-icon="">
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title style="text-align: center;">{{ item.recruitment_no }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item style="text-align: center;" v-for="item in item.all_recruitment_no" :key="item">
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </td>
                <td class="customersByOverDueAmount__td text-left text--text">
                  <v-list-group v-model="item.toggler" append-icon="">
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title style="text-align: center;">{{ item.recruitment_amount }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item style="text-align: center;" v-for="item in item.all_recruitment_amount" :key="item">
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </td>
                <td class="customersByOverDueAmount__td text-left text--text">
                  <v-list-group v-model="item.toggler" append-icon="">
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title style="text-align: center;">{{ item.contract_no }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item style="text-align: center;" v-for="item in item.all_contract_no" :key="item">
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </td>
                <td class="customersByOverDueAmount__td text-left text--text">
                  <v-list-group v-model="item.toggler" append-icon="">
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title style="text-align: center;">{{ item.contract_amount }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item style="text-align: center;" v-for="item in item.all_contract_amount" :key="item">
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </td>
                <td class="customersByOverDueAmount__td text-left text--text">
                  <v-list-group v-model="item.toggler" append-icon="">
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title style="text-align: center;">{{ item.temp_no }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item style="text-align: center;" v-for="item in item.all_temp_no" :key="item">
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </td>
                <td class="customersByOverDueAmount__td text-left text--text">
                  <v-list-group v-model="item.toggler" append-icon="">
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title style="text-align: center;">{{ item.temp_amount }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item style="text-align: center;" v-for="item in item.all_temp_amount" :key="item">
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </td>
                <td class="customersByOverDueAmount__td text-left text--text">
                  <v-list-group v-model="item.toggler" append-icon="">
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title style="text-align: center;">{{ item.freelancer_no }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item style="text-align: center;" v-for="item in item.all_freelancer_no" :key="item">
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </td>
                <td class="customersByOverDueAmount__td text-left text--text">
                  <v-list-group v-model="item.toggler" append-icon="">
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title style="text-align: center;">{{ item.freelancer_amount }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item style="text-align: center;" v-for="item in item.all_freelancer_amount" :key="item">
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </td>
                <td class="customersByOverDueAmount__td text-left text--text">
                  <v-list-group v-model="item.toggler" append-icon="">
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title style="text-align: center;">{{ item.total_hc }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item style="text-align: center;" v-for="item in item.all_total_hc" :key="item">
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </td>
                <td class="customersByOverDueAmount__td text-left text--text">
                  <v-list-group v-model="item.toggler" append-icon="">
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title style="text-align: center;">{{ item.total_billing }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item style="text-align: center;" v-for="item in item.all_total_billing" :key="item">
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </td>
              </tr>
            </table> 
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Categories of Roles -->
      <v-col sm="12" md="6" lg="6">
        <v-card color="card_bg" id="card">
          <v-card-title id="card-title">
            <h4>Categories of Roles</h4>
            <div class="flex_row">
              <v-icon color="#004880" x-small>fa-circle</v-icon>
              <span class="pl-2">Closed</span>
            </div>
          </v-card-title>
          <v-card-text id="card-text">
            <!-- <v-row class="ma-0 pa-0 mb-3" justify="center" v-for="item in request_breakdown" :key="item">
              <v-col cols="8" class="ma-0 pa-0" align-self="center"> -->
                <div class="flex_row">
                <div class="flex_column align-center mx-auto" v-for="item in categories_roles" :key="item">
                  <div class="flex_column justify-end " style="background: #E3E4E6;width: 30px;height: 200px;border-radius: 6px;">
                    <div :style="{ height: item.per }" style="background: #004880;width: 30px;border-radius: 6px;"></div>
                  </div>
                  <span class="subtext--text caption d-inline pt-2 text-center">{{ item.title }}<br/>& Admin</span>
                </div>
              </div>
              <!-- </v-col>
            </v-row> -->
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Candidate Source -->
      <v-col sm="12" md="6" lg="6">
        <v-card color="card_bg"  id="card">
          <v-card-title id="card-title">
            <h4 class="text--text">Candidate Source</h4>
          </v-card-title>
          <v-card-text id="card-text">
            <div class="ex_br__con flex_row align-center justify-space-between">
              <div class="flex_column justify-space-between">
                <div class="flex_row align-center pa-2 mt-2" v-for="item in candidate_source" :key="item.id">
                  <div :class="item.color" class="dote mr-2" style="min-width: 15px;min-height: 6px;border-radius: 3px;"></div>
                  <span class="subtext--text">{{ item.name }} - {{ item.percentage }}% </span>
                </div>
                <!-- <div style="min-width: 100px; "></div> -->
              </div>
              <!-- <line-chart
              class="text--text"
              ref="lineChart"
              :chart-data="lineChartData"
              :colors="lineChartColors"
              :chart-options="lineChartOptions"
              :height="420"
              /> -->
              <doughnut-chart
                  :chart-data="doughnutChartData"
                  :chart-options="doughnutChartOptions"
                  :colors="doughnutColors"
                  label="hide"
                />
            <div class="flex_column justify-space-between"></div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row><v-spacer class="my-9 py-9"></v-spacer></v-row>
  </v-row>
</template>

<script>
import '@/assets/scss/_dashboard.scss'
import '@/assets/scss/utils/Tables/_customersByOverDueAmount.scss'
import RedBellIcon from '@/assets/images/Alerts/red-bell-icon.svg'
import YellowBellIcon from '@/assets/images/Alerts/yellow-bell-icon.svg'
import ReloadIcon from '@/assets/images/DashboardLayout/Reload-icon.svg'
import SalesGoalIcon from '@/assets/images/Dashboard/SalesGoal.svg'
import OverviewTotalsViewer from '@/components/Dashboard/OverviewTotalsViewer/index.vue'
import LineGraph from '@/components/Graphs/LineGraph/index.vue'
import Footer from '@/components/Footer/index.vue'
import WelcomeSvg from '@/assets/images/icons/welcome.svg'
import CustomInputContainer from '@/components/utils/CustomInputContainer.vue'
import CardWithIcon from '@/components/Cards/CardWithIcon/index.vue'
import Filters from '@/components/Dashboard/Filters.vue'
import FunnelChart from '@/components/Dashboard/funnelChart/funnelChart.vue'
// import DoughnutChart from './doughnut-chart.js'

export default {
  layout: 'dashboard',
  components: { 
    OverviewTotalsViewer,
    RedBellIcon,
    YellowBellIcon,
    LineGraph,
    ReloadIcon,
    Footer,
    WelcomeSvg,
    CustomInputContainer,
    CardWithIcon,
    SalesGoalIcon,
    Filters,
    FunnelChart,
   },
  data() {
    return {

      // pie chart
      // pieChartData: {
      //   labels: ['A', 'B', 'C', 'D'],
      //   datasets: [
      //     {
      //       data: [30, 40, 20, 10],
      //       backgroundColor: [
      //         '#F7464A',
      //         '#46BFBD',
      //         '#FDB45C',
      //         '#949FB1',
      //       ],
      //       hoverBackgroundColor: [
      //         '#FF5A5E',
      //         '#5AD3D1',
      //         '#FFC870',
      //         '#A8B3C5',
      //       ],
      //     },
      //   ],
      // },
      // pieChartOptions: {
      //   responsive: true,
      // },
      // pieColors: {
      //   start: '#F7464A',
      //   middle: '#46BFBD',
      //   end: '#FDB45C',
      // },

      // doughnut chart data
      doughnutChartData: {
        labels: ['Bayt', 'LinkedIn', 'Indeed', 'Naukrigulf', 'Internal Database'],
        datasets: [
          {
            backgroundColor: ['#56e2cf', '#e25668', '#56aee2', '#cf56e2', '#bce0fd'],
            data: [40, 20, 80, 10],
            hole: 0.9,
            cutout:"70%"
          }
        ]
      },
      doughnutChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      doughnutColors: {
        start: "#F7464A",
        middle: "#46BFBD",
        end: "#FDB45C"
      },

      // line chart data
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: "Total Invoices",
          fontSize: 24,
          fontColor: "#6b7280"
        },
        tooltips: {
          backgroundColor: "#f95050"
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ]
        }
      },
      lineChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [
          {
            label: "Monthly-invoice",
            data: [50, 100, 30, 60, 10, 30, 90, 20],
            borderColor: "rgba(72,255,0,0.31)",
            pointBackgroundColor: "white",
            borderWidth: 2,
            pointBorderColor: "gray",
            backgroundColor: "#ABF9B5"
          }
        ]
      },
      lineChartColors: {
        start: "rgba(255, 0, 0, 0.5)",
        middle: "rgba(255, 0, 0, 0.25)",
        end: "rgba(255, 0, 0, 0)"
      },

      // table data
      month_year_menu: false,
      month_year_date: null,
      placement_report: [
        { 
          toggler: false,
          name:'Sanjeed', 
          country: ['UAE', 'EGY', 'SD'],

          recruitment_no: 6,
          recruitment_amount: '100.000',
          all_recruitment_no: [4, 2, 0],
          all_recruitment_amount: ['60.000', '40.000', '20.000'],
          
          contract_no: 4,
          contract_amount: '50.000',
          all_contract_no: [2, 1,0],
          all_contract_amount: ['30.000', '20.000', '20.000'],

          temp_no: 6,
          temp_amount: '85.000',
          all_temp_no: [4, 2, 0],
          all_temp_amount: ['35.000', '50.000', '10.000'],

          freelancer_no: 0,
          freelancer_amount: '0.00',
          all_freelancer_no: [0, 0, 0],
          all_freelancer_amount: ['0.00', '0.00', '0.00'],

          total_hc: 16,
          total_billing: '235.000',
          all_total_hc: [' ', ' ', ' '],
          all_total_billing: [' ', ' ', ' '],
        },
        { 
          toggler: false,
          name:'Dineen', 
          country: ['UAE', 'EGY', 'SD'],

          recruitment_no: 6,
          recruitment_amount: '78.000',
          all_recruitment_no: [4, 2, 0],
          all_recruitment_amount: ['60.000', '40.000', '20.000'],
          
          contract_no: 3,
          contract_amount: '40.000',
          all_contract_no: [2, 1,0],
          all_contract_amount: ['30.000', '20.000', '20.000'],

          temp_no: 5,
          temp_amount: '87.000',
          all_temp_no: [4, 2, 0],
          all_temp_amount: ['35.000', '50.000', '10.000'],

          freelancer_no: 0,
          freelancer_amount: '0.00',
          all_freelancer_no: [0, 0, 0],
          all_freelancer_amount: ['0.00', '0.00', '0.00'],

          total_hc: 14,
          total_billing: '205.000',
          all_total_hc: [' ', ' ', ' '],
          all_total_billing: [' ', ' ', ' '],
        },
        { 
          toggler: false,
          name:'MJ', 
          country: ['UAE', 'EGY', 'SD'],

          recruitment_no: 4,
          recruitment_amount: '72.000',
          all_recruitment_no: [4, 2, 0],
          all_recruitment_amount: ['60.000', '40.000', '20.000'],
          
          contract_no: 2,
          contract_amount: '30.000',
          all_contract_no: [2, 1,0],
          all_contract_amount: ['30.000', '20.000', '20.000'],

          temp_no: 3,
          temp_amount: '55.000',
          all_temp_no: [4, 2, 0],
          all_temp_amount: ['35.000', '50.000', '10.000'],

          freelancer_no: 0,
          freelancer_amount: '0.00',
          all_freelancer_no: [0, 0, 0],
          all_freelancer_amount: ['0.00', '0.00', '0.00'],

          total_hc: 9,
          total_billing: '157.000',
          all_total_hc: [' ', ' ', ' '],
          all_total_billing: [' ', ' ', ' '],
        },
        { 
          toggler: false,
          name:'Maria', 
          country: ['UAE', 'EGY', 'SD'],

          recruitment_no: 8,
          recruitment_amount: '65.000',
          all_recruitment_no: [4, 2, 0],
          all_recruitment_amount: ['60.000', '40.000', '20.000'],
          
          contract_no: 1,
          contract_amount: '20.000',
          all_contract_no: [2, 1,0],
          all_contract_amount: ['30.000', '20.000', '20.000'],

          temp_no: 4,
          temp_amount: '60.000',
          all_temp_no: [4, 2, 0],
          all_temp_amount: ['35.000', '50.000', '10.000'],

          freelancer_no: 0,
          freelancer_amount: '0.00',
          all_freelancer_no: [0, 0, 0],
          all_freelancer_amount: ['0.00', '0.00', '0.00'],

          total_hc: 13,
          total_billing: '145.000',
          all_total_hc: [' ', ' ', ' '],
          all_total_billing: [' ', ' ', ' '],
        },
        { 
          toggler: false,
          name:'Nikita', 
          country: ['UAE', 'EGY', 'SD'],

          recruitment_no: 11,
          recruitment_amount: '87.000',
          all_recruitment_no: [4, 2, 0],
          all_recruitment_amount: ['60.000', '40.000', '20.000'],
          
          contract_no: 1,
          contract_amount: '10.000',
          all_contract_no: [2, 1,0],
          all_contract_amount: ['30.000', '20.000', '20.000'],

          temp_no: 2,
          temp_amount: '35.000',
          all_temp_no: [4, 2, 0],
          all_temp_amount: ['35.000', '50.000', '10.000'],

          freelancer_no: 0,
          freelancer_amount: '0.00',
          all_freelancer_no: [0, 0, 0],
          all_freelancer_amount: ['0.00', '0.00', '0.00'],

          total_hc: 14,
          total_billing: '132.000',
          all_total_hc: [' ', ' ', ' '],
          all_total_billing: [' ', ' ', ' '],
        },
      ],
      // Candidate Source
      candidate_source: [
        { name: 'Bayt',  color: 'accent2'},
        { name: 'LinkedIn',  color: 'primary'},
        { name: 'Indeed',  color: 'accent1'},
        { name: 'Naukrigulf',  color: 'accent4'},
        { name: 'Internal Database', color: 'accent3'},
      ],

      // Categories of Roles
      categories_roles: [
        { title: 'Office Supp.', per: '60%' },
        { title: 'BFSI.', per: '90%' },
        { title: 'Office Supp.', per: '70%' },
        { title: 'BFSI.', per: '40%' },
        { title: 'Office Supp.', per: '10%' },
        { title: 'Office Supp.', per: '90%' },
        { title: 'Office Supp.', per: '30%' },
        { title: 'Office Supp.', per: '50%' },
      ],

      // Placements Overview Summary
      placements_overview_summary: [
        { c_name:'Massive Dynamic', balance_due: '23,785', within_due: '1/2/2023', over_due: '1,25,489', due_invoice: '13', above_credit_limit: 'Yes' },
        { c_name:'Massive Dynamic', balance_due: '23,785', within_due: '1/2/2023', over_due: '1,25,489', due_invoice: '13', above_credit_limit: 'Yes' },
        { c_name:'Massive Dynamic', balance_due: '23,785', within_due: '1/2/2023', over_due: '1,25,489', due_invoice: '13', above_credit_limit: 'Yes' },
        { c_name:'Massive Dynamic', balance_due: '23,785', within_due: '1/2/2023', over_due: '1,25,489', due_invoice: '13', above_credit_limit: 'Yes' },
        { c_name:'Massive Dynamic', balance_due: '23,785', within_due: '1/2/2023', over_due: '1,25,489', due_invoice: '13', above_credit_limit: 'Yes' },
      ],

      // REQUEST BREAKDOWN
      request_breakdown: [
        { name: 'New Requests', num: '21', per: '50%', color:'secondary'  },
        { name: 'Recruitment', num: '07', per: '40%', color:'primary' },
        { name: 'Cancelled', num: '03', per: '30%', color:'accent4' },
        { name: 'On Hold', num: '01', per: '10%', color:' accent5' },
        { name: 'Unsuccessful', num: '05', per: '30%', color:'accent1' },
        { name: 'Selections', num: '04', per: '20%', color:'accent6' },
      ],

      // RECUTTING FUNNEL
      recruiting_funnel: [
        {
          name: 'Applicants',
          amount: '480',
          color: 'accent2',
        },
        {
          name: 'Interviews',
          amount: '170',
          color: 'accent2',
        },
        {
          name: 'Qualified',
          amount: '480',
          color: 'accent2',
        },
        {
          name: 'Submitted',
          amount: '480',
          color: 'accent2',
        },
      ],

      // FILTERS DATA
      filters: [
          { label: 'Recruiter', placeholder: 'All', items: 'All' },
          { label: 'Acct. Manager', placeholder: 'All', items: 'All' },
          { label: 'Status', placeholder: 'All', items: 'All' },
          { label: 'Service Type', placeholder: 'All', items: 'All' },
          { label: 'Location', placeholder: 'All', items: 'All' },
          { label: 'Date Type', placeholder: 'Active Month', items: 'Active Month' },
      ],

      // TODAYS TASKS
      today_tasks_only: false,
      todays_headers: [
        { text: 'Task', value: 'task', align: 'start', sortable: false},
        { text: 'Opportunity', value: 'opportunity'},
        { text: 'Company', value: 'company'},
        { text: 'Contact', value: 'contact'},
        { text: 'Created_on', value: 'created_on'},
        { text: 'Action', value: 'action', sortable: false},
      ],
      todays_tasks: [],
      editedIndex: -1,
      editedItem: {
        task: '',
        opportunity: '',
        company: '',
        contact: '',
        created_on: '',
      },
      defaultItem: {
        task: '-',
        opportunity: '-',
        company: '-',
        contact: '-',
        created_on: '-',
      },

      todays_tasks: [],
      // AVERAGE SALES CALYCLE LENGTH
      sales_average: { days: '98' },
      // SALES GOALS
      sales_goals: 
        { 
          generated: '100,500',
          generated_per: '57',
          salesman: 'Christopher Adams',
          performing: '83',
          target: '200,500',
          achieved: '100,500',
          difference: '100,000',
        },
      darkMood: false,
      // V-SELECT
      allCompaniesFields: ['Tec', 'AI', 'SW'],

      // init company and customer
      init_company: { name: '', reg_no: '', field: '', email: '', phone: '', website: '', location: '', street: '', office_no: '' },
      init_customer: { name: '', reg_no: '', field: '', email: '', phone: '', website: '', location: '', street: '', office_no: '', ac_no: '', lcc: '', ac_type: '' },
      firstVisit: true,

      // welcome 
      welcomeDialog: false,
      hi: true,
      addCompany: false,
      companyAddSuccessfully: false,
      addCustomer: false,
      customerAddSuccessfully: false,
      
      recent_sale_data : [
        { name: 'Globex Corporation', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAAulBMVEX////mfiK9w8fTVACVpabOOQDYXg778Ol+i4y4v8PldgDAxsrSUQDZ3d/hdByTp6nKz9Lv8fLh5OWJl5j43sz++fbNZTLWUADmfBvT19r3+Pjn6uuosrPnpozUVhWxuLzRRwC6gmfoi0KjnZXurH7659v0zbLkbgDSWxvsn2W3iHGrlYidoZ3to2+mlIzaZRLngy/xwKDxuZXqklHXa0behF/uwrHYxLzpsJyyjHqvj4LWZDzgjGrilXkKZ/NAAAADwklEQVRoge2Y23aqMBCGxVCtEIlWMWptxVOlp41tbWsP+/1fa4eTYkGS4KRebP4rF2TxrflnMmZSqZQqVaqUag2HvwxsN1tmI5DZarZ/iTloNKoJNRoD9eTL1h4zIrculUKHWdAQrDDRF9nMUBeqqIMDoUYBD9RQDxm8M/oUVDXcfIdV+XwhQGVc4LpqC1EZF7ZzmGLUatWEpIpZDG3zUDhYFi5cuxIPFjRciWABsytaxpGgirkphW00gbBSHoO5PJSjVqswtdyWxcIk91KuoqoNmBOOzK4NsDA7V66QwUr5/8KeKLcnqmTJlgx1wjhRl6q05KhQx9YT/QPJJRfu8CjlMtxoILOFgLZPIJmTIxxVIlzIYCWyCzv0CbcM4LsEMZthLfYl0jPAOkVC/Llaze0Fj6vqziTfZxUOh2rntA1T4Q0gG3QzySb4zkmoOeqcd0ZpsFkNXigxuf5OOue+OvrYNLdo9nOsRy/Iex0aenWNiB59n5FH4/A+eTzaPdMJur6CBNsb10F0wrgxJAAlf7NXZEKR425sKGp3SjFCiM58rp6kxXz/OZlRtgjTaRcEas+NvuVj0bUecH1yZ4fshM+Ifu2vwVbfmAMEvFgZmqZ5Qbi9mJsW0XtBsB5bbKwWx1Jvln3Nlx9JDjeiIhQs7i9vjqPOl1ooK+S6s0wumbkh1YqWL+fHUG8NLVaYXkzvSApMyB0N31rb5cZtYaidoMZcZvT9PpiQ+8jgBNXnFiysfeqWi2nv44Fs9fDRozhNLc593Kcy1WKw25t8/mH6nPTcGFr7udp4LEKdp6hsH6FImEbC8RMvvdooUFc3GVRmdG3LSQrXrKzVhvQ+WmRSAzD6QcYoG+pzJfuGveof+BIDe4yMwx2DWaDeISjrGyu5sspKbJJseV6NyctBhuFKpbe7zP+auJYy/0eHHZZWX5z6lG+xlIwnUaoNSGVc0ap6hsU+CwYLmFlffbFwITPrSyy79hQ62qlIuF3gYFm4Int3DhwsC1egVdVX0FRNW/FnBXiPhVyG91jI5RcV2BduauGhvnjJVZFageRCt6gIy2tUjwpSy5LLO7uqqCh+TYE35AjLa8uqsByTb9VgefPfibBrNdh1PtX+yhihjpf3xSmpNeac84vIwpxoK680Nacerxp95WDfnN29B5AshJw3DrbuslHu4OBYBFpjg6HLPV5snHBkBVIwDDsbHrVir52sef0YOWuBE6v9Bcx1ekK3vfb3Gc28oSgiTM++RWevxV90BiT0V+76og4iKWSpUqVKpfUPc9xeJwMXhQMAAAAASUVORK5CYII=', amount: '100.000' },
        { name: 'Etisalat', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAAulBMVEX////mfiK9w8fTVACVpabOOQDYXg778Ol+i4y4v8PldgDAxsrSUQDZ3d/hdByTp6nKz9Lv8fLh5OWJl5j43sz++fbNZTLWUADmfBvT19r3+Pjn6uuosrPnpozUVhWxuLzRRwC6gmfoi0KjnZXurH7659v0zbLkbgDSWxvsn2W3iHGrlYidoZ3to2+mlIzaZRLngy/xwKDxuZXqklHXa0behF/uwrHYxLzpsJyyjHqvj4LWZDzgjGrilXkKZ/NAAAADwklEQVRoge2Y23aqMBCGxVCtEIlWMWptxVOlp41tbWsP+/1fa4eTYkGS4KRebP4rF2TxrflnMmZSqZQqVaqUag2HvwxsN1tmI5DZarZ/iTloNKoJNRoD9eTL1h4zIrculUKHWdAQrDDRF9nMUBeqqIMDoUYBD9RQDxm8M/oUVDXcfIdV+XwhQGVc4LpqC1EZF7ZzmGLUatWEpIpZDG3zUDhYFi5cuxIPFjRciWABsytaxpGgirkphW00gbBSHoO5PJSjVqswtdyWxcIk91KuoqoNmBOOzK4NsDA7V66QwUr5/8KeKLcnqmTJlgx1wjhRl6q05KhQx9YT/QPJJRfu8CjlMtxoILOFgLZPIJmTIxxVIlzIYCWyCzv0CbcM4LsEMZthLfYl0jPAOkVC/Llaze0Fj6vqziTfZxUOh2rntA1T4Q0gG3QzySb4zkmoOeqcd0ZpsFkNXigxuf5OOue+OvrYNLdo9nOsRy/Iex0aenWNiB59n5FH4/A+eTzaPdMJur6CBNsb10F0wrgxJAAlf7NXZEKR425sKGp3SjFCiM58rp6kxXz/OZlRtgjTaRcEas+NvuVj0bUecH1yZ4fshM+Ifu2vwVbfmAMEvFgZmqZ5Qbi9mJsW0XtBsB5bbKwWx1Jvln3Nlx9JDjeiIhQs7i9vjqPOl1ooK+S6s0wumbkh1YqWL+fHUG8NLVaYXkzvSApMyB0N31rb5cZtYaidoMZcZvT9PpiQ+8jgBNXnFiysfeqWi2nv44Fs9fDRozhNLc593Kcy1WKw25t8/mH6nPTcGFr7udp4LEKdp6hsH6FImEbC8RMvvdooUFc3GVRmdG3LSQrXrKzVhvQ+WmRSAzD6QcYoG+pzJfuGveof+BIDe4yMwx2DWaDeISjrGyu5sspKbJJseV6NyctBhuFKpbe7zP+auJYy/0eHHZZWX5z6lG+xlIwnUaoNSGVc0ap6hsU+CwYLmFlffbFwITPrSyy79hQ62qlIuF3gYFm4Int3DhwsC1egVdVX0FRNW/FnBXiPhVyG91jI5RcV2BduauGhvnjJVZFageRCt6gIy2tUjwpSy5LLO7uqqCh+TYE35AjLa8uqsByTb9VgefPfibBrNdh1PtX+yhihjpf3xSmpNeac84vIwpxoK680Nacerxp95WDfnN29B5AshJw3DrbuslHu4OBYBFpjg6HLPV5snHBkBVIwDDsbHrVir52sef0YOWuBE6v9Bcx1ekK3vfb3Gc28oSgiTM++RWevxV90BiT0V+76og4iKWSpUqVKpfUPc9xeJwMXhQMAAAAASUVORK5CYII=',  amount: '950.000' },
        { name: 'Acme', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAAulBMVEX////mfiK9w8fTVACVpabOOQDYXg778Ol+i4y4v8PldgDAxsrSUQDZ3d/hdByTp6nKz9Lv8fLh5OWJl5j43sz++fbNZTLWUADmfBvT19r3+Pjn6uuosrPnpozUVhWxuLzRRwC6gmfoi0KjnZXurH7659v0zbLkbgDSWxvsn2W3iHGrlYidoZ3to2+mlIzaZRLngy/xwKDxuZXqklHXa0behF/uwrHYxLzpsJyyjHqvj4LWZDzgjGrilXkKZ/NAAAADwklEQVRoge2Y23aqMBCGxVCtEIlWMWptxVOlp41tbWsP+/1fa4eTYkGS4KRebP4rF2TxrflnMmZSqZQqVaqUag2HvwxsN1tmI5DZarZ/iTloNKoJNRoD9eTL1h4zIrculUKHWdAQrDDRF9nMUBeqqIMDoUYBD9RQDxm8M/oUVDXcfIdV+XwhQGVc4LpqC1EZF7ZzmGLUatWEpIpZDG3zUDhYFi5cuxIPFjRciWABsytaxpGgirkphW00gbBSHoO5PJSjVqswtdyWxcIk91KuoqoNmBOOzK4NsDA7V66QwUr5/8KeKLcnqmTJlgx1wjhRl6q05KhQx9YT/QPJJRfu8CjlMtxoILOFgLZPIJmTIxxVIlzIYCWyCzv0CbcM4LsEMZthLfYl0jPAOkVC/Llaze0Fj6vqziTfZxUOh2rntA1T4Q0gG3QzySb4zkmoOeqcd0ZpsFkNXigxuf5OOue+OvrYNLdo9nOsRy/Iex0aenWNiB59n5FH4/A+eTzaPdMJur6CBNsb10F0wrgxJAAlf7NXZEKR425sKGp3SjFCiM58rp6kxXz/OZlRtgjTaRcEas+NvuVj0bUecH1yZ4fshM+Ifu2vwVbfmAMEvFgZmqZ5Qbi9mJsW0XtBsB5bbKwWx1Jvln3Nlx9JDjeiIhQs7i9vjqPOl1ooK+S6s0wumbkh1YqWL+fHUG8NLVaYXkzvSApMyB0N31rb5cZtYaidoMZcZvT9PpiQ+8jgBNXnFiysfeqWi2nv44Fs9fDRozhNLc593Kcy1WKw25t8/mH6nPTcGFr7udp4LEKdp6hsH6FImEbC8RMvvdooUFc3GVRmdG3LSQrXrKzVhvQ+WmRSAzD6QcYoG+pzJfuGveof+BIDe4yMwx2DWaDeISjrGyu5sspKbJJseV6NyctBhuFKpbe7zP+auJYy/0eHHZZWX5z6lG+xlIwnUaoNSGVc0ap6hsU+CwYLmFlffbFwITPrSyy79hQ62qlIuF3gYFm4Int3DhwsC1egVdVX0FRNW/FnBXiPhVyG91jI5RcV2BduauGhvnjJVZFageRCt6gIy2tUjwpSy5LLO7uqqCh+TYE35AjLa8uqsByTb9VgefPfibBrNdh1PtX+yhihjpf3xSmpNeac84vIwpxoK680Nacerxp95WDfnN29B5AshJw3DrbuslHu4OBYBFpjg6HLPV5snHBkBVIwDDsbHrVir52sef0YOWuBE6v9Bcx1ekK3vfb3Gc28oSgiTM++RWevxV90BiT0V+76og4iKWSpUqVKpfUPc9xeJwMXhQMAAAAASUVORK5CYII=',  amount: '60.00' },
        { name: 'Vehement Capital', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAAulBMVEX////mfiK9w8fTVACVpabOOQDYXg778Ol+i4y4v8PldgDAxsrSUQDZ3d/hdByTp6nKz9Lv8fLh5OWJl5j43sz++fbNZTLWUADmfBvT19r3+Pjn6uuosrPnpozUVhWxuLzRRwC6gmfoi0KjnZXurH7659v0zbLkbgDSWxvsn2W3iHGrlYidoZ3to2+mlIzaZRLngy/xwKDxuZXqklHXa0behF/uwrHYxLzpsJyyjHqvj4LWZDzgjGrilXkKZ/NAAAADwklEQVRoge2Y23aqMBCGxVCtEIlWMWptxVOlp41tbWsP+/1fa4eTYkGS4KRebP4rF2TxrflnMmZSqZQqVaqUag2HvwxsN1tmI5DZarZ/iTloNKoJNRoD9eTL1h4zIrculUKHWdAQrDDRF9nMUBeqqIMDoUYBD9RQDxm8M/oUVDXcfIdV+XwhQGVc4LpqC1EZF7ZzmGLUatWEpIpZDG3zUDhYFi5cuxIPFjRciWABsytaxpGgirkphW00gbBSHoO5PJSjVqswtdyWxcIk91KuoqoNmBOOzK4NsDA7V66QwUr5/8KeKLcnqmTJlgx1wjhRl6q05KhQx9YT/QPJJRfu8CjlMtxoILOFgLZPIJmTIxxVIlzIYCWyCzv0CbcM4LsEMZthLfYl0jPAOkVC/Llaze0Fj6vqziTfZxUOh2rntA1T4Q0gG3QzySb4zkmoOeqcd0ZpsFkNXigxuf5OOue+OvrYNLdo9nOsRy/Iex0aenWNiB59n5FH4/A+eTzaPdMJur6CBNsb10F0wrgxJAAlf7NXZEKR425sKGp3SjFCiM58rp6kxXz/OZlRtgjTaRcEas+NvuVj0bUecH1yZ4fshM+Ifu2vwVbfmAMEvFgZmqZ5Qbi9mJsW0XtBsB5bbKwWx1Jvln3Nlx9JDjeiIhQs7i9vjqPOl1ooK+S6s0wumbkh1YqWL+fHUG8NLVaYXkzvSApMyB0N31rb5cZtYaidoMZcZvT9PpiQ+8jgBNXnFiysfeqWi2nv44Fs9fDRozhNLc593Kcy1WKw25t8/mH6nPTcGFr7udp4LEKdp6hsH6FImEbC8RMvvdooUFc3GVRmdG3LSQrXrKzVhvQ+WmRSAzD6QcYoG+pzJfuGveof+BIDe4yMwx2DWaDeISjrGyu5sspKbJJseV6NyctBhuFKpbe7zP+auJYy/0eHHZZWX5z6lG+xlIwnUaoNSGVc0ap6hsU+CwYLmFlffbFwITPrSyy79hQ62qlIuF3gYFm4Int3DhwsC1egVdVX0FRNW/FnBXiPhVyG91jI5RcV2BduauGhvnjJVZFageRCt6gIy2tUjwpSy5LLO7uqqCh+TYE35AjLa8uqsByTb9VgefPfibBrNdh1PtX+yhihjpf3xSmpNeac84vIwpxoK680Nacerxp95WDfnN29B5AshJw3DrbuslHu4OBYBFpjg6HLPV5snHBkBVIwDDsbHrVir52sef0YOWuBE6v9Bcx1ekK3vfb3Gc28oSgiTM++RWevxV90BiT0V+76og4iKWSpUqVKpfUPc9xeJwMXhQMAAAAASUVORK5CYII=',  amount: '120.000' },
        { name: 'Stark Industries', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAAulBMVEX////mfiK9w8fTVACVpabOOQDYXg778Ol+i4y4v8PldgDAxsrSUQDZ3d/hdByTp6nKz9Lv8fLh5OWJl5j43sz++fbNZTLWUADmfBvT19r3+Pjn6uuosrPnpozUVhWxuLzRRwC6gmfoi0KjnZXurH7659v0zbLkbgDSWxvsn2W3iHGrlYidoZ3to2+mlIzaZRLngy/xwKDxuZXqklHXa0behF/uwrHYxLzpsJyyjHqvj4LWZDzgjGrilXkKZ/NAAAADwklEQVRoge2Y23aqMBCGxVCtEIlWMWptxVOlp41tbWsP+/1fa4eTYkGS4KRebP4rF2TxrflnMmZSqZQqVaqUag2HvwxsN1tmI5DZarZ/iTloNKoJNRoD9eTL1h4zIrculUKHWdAQrDDRF9nMUBeqqIMDoUYBD9RQDxm8M/oUVDXcfIdV+XwhQGVc4LpqC1EZF7ZzmGLUatWEpIpZDG3zUDhYFi5cuxIPFjRciWABsytaxpGgirkphW00gbBSHoO5PJSjVqswtdyWxcIk91KuoqoNmBOOzK4NsDA7V66QwUr5/8KeKLcnqmTJlgx1wjhRl6q05KhQx9YT/QPJJRfu8CjlMtxoILOFgLZPIJmTIxxVIlzIYCWyCzv0CbcM4LsEMZthLfYl0jPAOkVC/Llaze0Fj6vqziTfZxUOh2rntA1T4Q0gG3QzySb4zkmoOeqcd0ZpsFkNXigxuf5OOue+OvrYNLdo9nOsRy/Iex0aenWNiB59n5FH4/A+eTzaPdMJur6CBNsb10F0wrgxJAAlf7NXZEKR425sKGp3SjFCiM58rp6kxXz/OZlRtgjTaRcEas+NvuVj0bUecH1yZ4fshM+Ifu2vwVbfmAMEvFgZmqZ5Qbi9mJsW0XtBsB5bbKwWx1Jvln3Nlx9JDjeiIhQs7i9vjqPOl1ooK+S6s0wumbkh1YqWL+fHUG8NLVaYXkzvSApMyB0N31rb5cZtYaidoMZcZvT9PpiQ+8jgBNXnFiysfeqWi2nv44Fs9fDRozhNLc593Kcy1WKw25t8/mH6nPTcGFr7udp4LEKdp6hsH6FImEbC8RMvvdooUFc3GVRmdG3LSQrXrKzVhvQ+WmRSAzD6QcYoG+pzJfuGveof+BIDe4yMwx2DWaDeISjrGyu5sspKbJJseV6NyctBhuFKpbe7zP+auJYy/0eHHZZWX5z6lG+xlIwnUaoNSGVc0ap6hsU+CwYLmFlffbFwITPrSyy79hQ62qlIuF3gYFm4Int3DhwsC1egVdVX0FRNW/FnBXiPhVyG91jI5RcV2BduauGhvnjJVZFageRCt6gIy2tUjwpSy5LLO7uqqCh+TYE35AjLa8uqsByTb9VgefPfibBrNdh1PtX+yhihjpf3xSmpNeac84vIwpxoK680Nacerxp95WDfnN29B5AshJw3DrbuslHu4OBYBFpjg6HLPV5snHBkBVIwDDsbHrVir52sef0YOWuBE6v9Bcx1ekK3vfb3Gc28oSgiTM++RWevxV90BiT0V+76og4iKWSpUqVKpfUPc9xeJwMXhQMAAAAASUVORK5CYII=',  amount: '505.00' },
      ],
      recent_expense_data : [
        { name: 'Employee Salary', amount: '525.000' },
        { name: 'Office Rent', amount: '550.000' },
        { name: 'DEWA Bill', amount: '6000' },
        { name: 'Business Travel Expense', amount: '1000' },
        { name: 'Office Stationary', amount: '500' },
      ],
      bank_tran_data: [
        { amount: '1000', name: 'EmiratesNBD', date: '2 July 2022' },
        { amount: '895', name: 'Dubai Islamic Bank', date: '8 July 2022' },
        { amount: '1000', name: 'EmiratesNBD', date: '2 July 2022' },
        { amount: '1000', name: 'EmiratesNBD', date: '2 July 2022' },
        { amount: '1000', name: 'EmiratesNBD', date: '2 July 2022' },
        { amount: '1000', name: 'EmiratesNBD', date: '2 July 2022' },
      ],
      customers_by_overdue: [
        { name:'Sanjeed', total_placements: '4',  total_billing: '170,550', average_billing: '65,000' },
        { name:'Dineen', total_placements: '4', total_billing: '170,550', average_billing: '65,000' },
        { name:'MJ', total_placements: '4', total_billing: '170,550', average_billing: '65,000' },
        { name:'Maria', total_placements: '4', total_billing: '170,550', average_billing: '65,000' },
        { name:'Nikita', total_placements: '4', total_billing: '170,550', average_billing: '65,000' },
      ],
      revenue_data: [
        { name: 'ERP', percentage: '50', color: 'accent2'},
        { name: 'ATS', percentage: '23', color: 'primary'},
        { name: 'CRM', percentage: '20', color: 'accent1'},
        { name: 'Accounting', percentage: '10', color: 'accent4'},
        { name: 'Others', percentage: '1', color: 'accent3'},
      ],
      paid_invoice_data: { last30Days: '38,058', notDeposited: '8,785', deposited: '18,522.2' },
      unpaid_invoice_data: { last365Days: '328,137', overDue: '440,652', notDueYet: '2541.20' },
      pipeline_data: [
        { name: 'Business', amount: '35.1k', percentage: '43', color: 'accent2'},
        { name: 'Office maintained', amount: '5.1k', percentage: '30', color: 'primary'},
        { name: 'Salary', amount: '102k', percentage: '25', color: 'accent4'},
        { name: 'DEWA', amount: '10k', percentage: '2', color: 'accent1'},
        { name: 'Office Rent', amount: '10k', percentage: '5', color: 'accent3'},
      ],
      alerts_data: [
        { title: 'Receivable Alerts !', subtitle: 'Receivable exceeds 3 months', priority: 'High Priority' },
        { title: 'Overdue Alert', subtitle: 'You have 100k overdue.', priority: 'High Priority' },
        { title: 'Bank Notification', subtitle: 'Monthly service charges', priority: 'Low Priority' },
      ],
      overview_data: [
        { name: 'Total Income', amount: '3,27,970.0', color: 'blue' },
        { name: 'Total Income', amount: '3,27,970.0', color: 'red' },
        { name: 'Total Income', amount: '3,27,970.0', color: 'yellow' },
        { name: 'Total Income', amount: '3,27,970.0', color: 'green' },
        { name: 'Total Income', amount: '3,27,970.0', color: 'yellow' },
        { name: 'Total Income', amount: '3,27,970.0', color: 'blue' },
      ],
    }
  },
  methods: {
    mapGlobalStateToLocal() {
      this.firstVisit = this.getValues.firstVisit
    },
    togglerHandle (){
      this.toggler = !this.toggler
    },
    handleAddNewCustomer() {
      this.customerAddSuccessfully = true
      this.addCustomer = false
    },
    handleCloseHiDialog() {
      this.customerAddSuccessfully = false
      this.welcomeDialog = false
      this.$store.dispatch('userData/changeFirstVisit', false)
      this.firstVisit = false
    },
    handleAddMoreCustomers() {
      this.customerAddSuccessfully = false
      this.welcomeDialog = false
      this.$nuxt.$rout = '/customers'
    },
    handleAddCustomerLater() {
      this.companyAddSuccessfully = false
      this.addCustomer = false
      this.welcomeDialog = false
      this.firstVisit = false
    },
    handleAddCustomer() {
      this.companyAddSuccessfully = false
      this.addCustomer = true
    },
    handleAddCompany() {
      this.addCompany = false
      this.companyAddSuccessfully = true
    },
    handleHi() {
      this.hi=false
      this.addCompany=true
    },
    initialize () {
      this.todays_tasks = [
        {
          task: 'Demo Presentation',
          opportunity: 'CRM Project',
          company: 'EasyBox',
          contact: 'Jonathan Paul',
          created_on: 'Oct 31, 2022',
        },
      ]
    },
  },
  computed: {
    getValues() {
      return this.$store.getters['userData/getFirstVisit'];
    },
    formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },
  mounted() {
    // console.log('map state',mapGlobalStateToLocal(['userData/firstVisit']))
    this.mapGlobalStateToLocal()
  },
  watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
  },
  created () {
    this.initialize()
  },
}
</script>