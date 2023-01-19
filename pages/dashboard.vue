<template>
  <v-row class="dashboard_wrapper">
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
    <Filters :data="filters" />
    <v-row class="row1" >
      <!-- RECUTTING FUNNEL -->
      <v-col sm="12" md="6" lg="6">
        <v-card color="card_bg" id="card">
          <v-card-title id="card-title">
            <h4 class="text--text">Recruiting Funnel</h4>
          </v-card-title>
          <v-card-text id="card-text" :class="privacyMood ? 'privacyMood' : ''">
            <v-row class="ex_br__con flex_row align-center justify-space-around">
              <v-col cols="7">
                <div class="recruiting_funnel_chart" style="min-width: 100px; min-height: 100px"></div>
              </v-col>
              <v-col cols="5">
                <div class="flex_row align-start justify-space-between">
                  <div class="1">
                    <div class="flex_column">
                    <h6 class="subtext--text font-weight-light">Applications</h6>
                    <div class="flex_row mt-3">
                      <div class="accent2 lines_color mr-2 flex_column" style="min-width: 3px; min-height: 20px; border-radius: 3px"></div>
                      <span class="text--text pl-3">480</span>
                    </div>
                  </div>
                  <div class="flex_column mt-5">
                    <h6 class="subtext--text font-weight-light">Qualified</h6>
                    <div class="flex_row mt-3">
                      <div class="primary lines_color mr-2 flex_column" style="min-width: 3px; min-height: 20px; border-radius: 3px"></div>
                      <span class="text--text pl-3">480</span>
                    </div>
                  </div>
                  <div class="flex_column mt-5">
                    <h6 class="subtext--text font-weight-light">Submitted</h6>
                    <div class="flex_row mt-3">
                      <div class="accent4 lines_color mr-2 flex_column" style="min-width: 3px; min-height: 20px; border-radius: 3px"></div>
                      <span class="text--text pl-3">480</span>
                    </div>
                  </div>
                  </div>
                  <div class="2">
                    <div class="flex_column">
                    <h6 class="subtext--text font-weight-light">Interviews</h6>
                    <div class="flex_row mt-3">
                      <div class="accent2 lines_color mr-2 flex_column" style="min-width: 3px; min-height: 20px; border-radius: 3px"></div>
                      <span class="text--text pl-3">480</span>
                    </div>
                  </div>
                  <div class="flex_column mt-5">
                    <h6 class="subtext--text font-weight-light">Placements</h6>
                    <div class="flex_row mt-3">
                      <div class="primary lines_color mr-2 flex_column" style="min-width: 3px; min-height: 20px; border-radius: 3px"></div>
                      <span class="text--text pl-3">480</span>
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
            <h4>Request Breakdown</h4>
          </v-card-title>
          <v-card-text id="card-text">
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
              <div class="success lighten-5 rounded pa-3 flex_row justify-space-around">
                <span class="text-text">Dept. Placements</span>
                <span class="success--text ml-9">15</span>
              </div>
              <div class="success lighten-5 rounded pa-3 flex_row justify-space-around">
                <span class="text-text">Dept. Value</span>
                <span class="success--text ml-9">AED 150,650</span>
              </div>
            </div>
            
            <v-simple-table class="customersByOverDueAmount__table table_bg">
              <template v-slot:default>
                <thead class="customersByOverDueAmount__thead">
                  <tr class="customersByOverDueAmount__tr">
                    <th class="customersByOverDueAmount__th text-left text--text h6 pr_5">
                      Recruiter<br/>Name
                    </th>
                    <th class="customersByOverDueAmount__th text-left text--text h6 pr_5">
                      Total<br/>Placements
                    </th>
                    <th class="customersByOverDueAmount__th text-left text--text h6 pr_5">
                      Billing VS<br/>Targets
                    </th>
                    <th class="customersByOverDueAmount__th text-left text--text h6 pr_5">
                      Average<br/>Billing
                    </th>
                  </tr>
                  <div class="my-4"></div>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in customers_by_overdue" :key="index" class="ma-0 pa-0">
                    <td class="customersByOverDueAmount__td text-left text--text h6">{{ item.c_name }}</td>
                    <td class="customersByOverDueAmount__td text-left text--text pr_5 balance_due__td">
                      <div class="progress_bar__con">
                        <div class="progress_bar__line">
                          <span class="text--text txt_inside_pbl">AED{{ item.balance_due }}</span>
                        </div>
                      </div>
                    </td>
                    <td class="customersByOverDueAmount__td text-left text--text pr_5">{{ item.within_due }}</td>
                    <td class="customersByOverDueAmount__td text-left text--text pr_5">{{ item.over_due }}</td>
                    <td class="customersByOverDueAmount__td text-left text--text ">{{ item.due_invoice }}</td>
                    <td class="customersByOverDueAmount__td text-right text--text">{{ item.above_credit_limit }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>


          </v-card-text>
        </v-card>
      </v-col>



      <v-col sm="12" md="8" lg="8">
        <v-card color="card_bg" id="card">
          <v-card-title id="card-title">
            <h4>Recruiting Funnel</h4>
          </v-card-title>
          <v-card-text id="card-text">
            <div class="sales_goal__con flex_row justify-space-between pb-5">

              <div class="sales_gen__con flex_column">
                <span class="subtext--text">Sales generated this month</span>
                <h5 class="text--text mt-3">AED {{ sales_goals.generated }}</h5>
                <h4 class="text--text mt-2">{{ sales_goals.generated_per }}%</h4>
                <span class="success--text mt-2">of Sales Target achieved</span>
              </div>

              <v-divider id="divider" class="mx-5" vertical></v-divider>
              
              <div class="sales_gen__con flex_column">
                <span class="subtext--text">Sales generated this month</span>
                <h5 class="text--text mt-3">{{ sales_goals.salesman }}</h5>
                <h4 class="text--text mt-2">{{ sales_goals.performing }}%</h4>
                <span class="success--text mt-2">of Sales Target achieved</span>
              </div>

              <SalesGoalIcon class="" />

            </div>

            <div class="sales_goal_footer__con flex_row justify-space-between mt-9">
              <div class="flex_column">
                <span class="primary--text">Target</span>
                <h5 class="text--text mt-3">AED {{ sales_goals.target }}</h5>
                <span class="subtext--text">32 Products Sold</span>
              </div>
              <v-divider id="divider" class="mx-5" vertical></v-divider>
              <div class="flex_column">
                <span class="accent3--text">Achieved</span>
                <h5 class="text--text mt-3">AED {{ sales_goals.achieved }}</h5>
                <span class="subtext--text">32 Products Sold</span>
              </div>
              <v-divider id="divider" class="mx-5" vertical></v-divider>
              <div class="flex_column">
                <span class="accent2--text">Difference</span>
                <h5 class="text--text mt-3">AED {{ sales_goals.difference }}</h5>
                <span class="subtext--text">32 Products Sold</span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>


      <!-- AVERAGE SALES CALYCLE LENGTH => sales_average -->
      <v-col sm="12" md="4" lg="4">
        <v-card color="card_bg"  id="card">
          <v-card-title id="card-title">
            <h4>Average Sales Cycle Length</h4>
          </v-card-title>
          <v-card-text id="card-text">
            <div class="sales_average__con" >
              <v-row>
                <v-spacer></v-spacer>
                <v-col cols="auto">
                  <div class="flex_row align-center pa-2">
                    <div class="success dote mr-2" style="min-width: 15px;min-height: 6px;border-radius: 3px;"></div>
                    <span class="subtext--text">Benchmark is 102 days</span>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <div class="text-left">
                    <h4>{{ sales_average.days }} Days</h4>
                    <span class="mt-3 primary--text">Avg. New Lead to Closure Length</span>
                  </div>
                  <div class="sales_average_chart__con mt-5">
                    <div class="bg" style="">
                       <div class="cur" style="" />
                       <div class="line" style="" />
                    </div>
                  </div>
                  <br />
                  <div class="flex_row justify-space-between mt-9 mb-0">
                    <span class="primary--text">New Lead</span>
                    <span class="text--text">Closure</span>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- / AVERAGE SALES CALYCLE LENGTH => sales_average -->
    </v-row>
    <v-row class="row2">
      <!-- TODAYS TASKS -->
      <v-col cols="12">
        <v-card id="card">
          <v-card-title id="card-title">
            <h4>Today's Tasks</h4>
            <div class="flex_row justify-space-between">
              <div class="view flex_row">
                <h6 class="text--text mr-3">View:</h6>
                <v-switch
                v-model="today_tasks_only"
                class="mt-0"
                inset
                color="primary"
                hide-details
                ></v-switch>
                <span class="subtext--text">Completed</span>
              </div>
              <div class="flex_row ml-5">
                <v-btn class="tall__btn" color="subtext" outlined>
                  <v-icon small color="subtext" class="mr-2">fa-plus</v-icon>
                  Mark as completed
                </v-btn>
              </div>
            </div>
          </v-card-title>
          <v-card-text id="card-text">
            <v-data-table :headers="todays_headers" :items="todays_tasks" show-select sort-by="created_on" class="elevation-0" hide-default-footer>
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">fa-pencil</v-icon>
                <v-icon small @click="deleteItem(item)">fa-delete</v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- / TODAYS TASKS -->
    </v-row>
    <v-row class="row3">
      <!-- PIPELINE VALUE -->
      <v-col sm="12" md="6" lg="6">
        <v-card color="card_bg"  id="card">
          <v-card-title id="card-title">
            <h4 class="text--text">Pipeline Value</h4>
            <div class="flex_row justify-space-between">
              <v-btn class="short__btn mr-2" outlined>Year</v-btn>
            </div>
          </v-card-title>
          <v-card-text id="card-text">
            <div class="ex_br__con flex_row align-center justify-space-between">
              <div class="flex_column" style="min-width: 50%; min-height: 100px;">
                  <div class="flex_row justify-space-between py-4" v-for="item in pipeline_data" :key="item.id" style="border-bottom: 0.5px solid #ddd">
                    <div class="flex_row">
                      <div :class="item.color" class="dote mr-2" style="min-width: 15px;min-height: 6px;border-radius: 3px;"></div>
                      <span class="text--text">{{ item.name }}</span>
                    </div>
                    <h6 class="ml-9 text--text">AED{{ item.amount }}</h6>
                  </div>
              </div>
              <div style="min-width: 50%; min-height: 100px;"></div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- / PIPELINE VALUE -->
    </v-row>




    <!-- ROW-2 -->
    <v-row class="row2" >

      <!-- Unpaid Invoice -->
      <!-- obj: unpaid_invoice_data  -->
      <v-col sm="12" md="4" lg="4">
        <v-card color="card_bg"  id="card">
          <v-card-title id="card-title">
            <h4>Unpaid Invoice</h4>
            <div class="flex_row justify-space-between">
              <v-btn class="short__btn mr-2" outlined>Month</v-btn>
              <v-btn class="short__btn" color="primary">Year</v-btn>
            </div>
          </v-card-title>
          <v-card-text id="card-text">
            <div class="unpaid_invoice__con flex_column">
              <div class="flex_row justify-space-between">
                <h5 class="text--text">Last 365days</h5>
                <h4 class="text--text">AED {{ unpaid_invoice_data.last365Days }}</h4>
              </div>
              <div class="mt-5 flex_row justify-space-between">
                <div class="flex_column justify-start">
                  <span class="caption subtext--text">Overdue</span>
                  <h5 class="text--text">AED {{ unpaid_invoice_data.overDue }}</h5>
                </div>
                <div class="flex_column justify-start">
                  <span class="caption subtext--text">Not due yet</span>
                  <h5 class="text--text">AED {{ unpaid_invoice_data.notDueYet }}</h5>
                </div>
              </div>
              <div class="graph__con mt-9">
                <div style="background: #E2E7F1; min-width: 85%; min-height: 50px;border-radius: 10px;">
                  <div style="background: #F3654A; max-width: 80%; min-height: 50px;border-radius: 10px;"/>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Paid Invoice -->
      <!-- obj: paid_invoice_data  -->
      <v-col sm="12" md="4" lg="4">
        <v-card color="card_bg"  id="card">
          <v-card-title id="card-title">
            <h4>Paid Invoice</h4>
            <div class="flex_row justify-space-between">
              <v-btn class="short__btn mr-2" outlined>Month</v-btn>
              <v-btn class="short__btn" color="primary">Year</v-btn>
            </div>
          </v-card-title>
          <v-card-text id="card-text">
            <div class="unpaid_invoice__con flex_column">
              <div class="flex_row justify-space-between">
                <h5 class="text--text">Last 30days</h5>
                <h4 class="text--text">AED {{ paid_invoice_data.last30Days }}</h4>
              </div>
              <div class="mt-5 flex_row justify-space-between">
                <div class="flex_column justify-start">
                  <span class="caption subtext--text">Not Deposited</span>
                  <h5 class="text--text">AED {{ paid_invoice_data.notDeposited }}</h5>
                </div>
                <div class="flex_column justify-start">
                  <span class="caption subtext--text">Deposited</span>
                  <h5 class="text--text">AED {{ paid_invoice_data.deposited }}</h5>
                </div>
              </div>
              <div class="graph__con mt-9">
                <div style="background: #E2E7F1; min-width: 85%; min-height: 50px;border-radius: 10px;">
                  <div style="background: #1AD598; max-width: 40%; min-height: 50px;border-radius: 10px;"/>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Total Revenue by Product -->
      <!-- obj: revenue_data  -->
      <v-col sm="12" md="4" lg="4">
        <v-card color="card_bg"  id="card">
          <v-card-title id="card-title">
            <h4 class="text--text">Total Revenue by Product</h4>
            <div class="flex_row justify-space-between">
              <v-btn class="short__btn mr-2" outlined>Year</v-btn>
            </div>
          </v-card-title>
          <v-card-text id="card-text">
            <div class="ex_br__con flex_row align-center justify-space-around">
              <div style="min-width: 100px; min-height: 100px;"></div>
              <div class="flex_column">
                <div class="flex_row align-center pa-2" v-for="item in revenue_data" :key="item.id">
                  <div :class="item.color" class="dote mr-2" style="min-width: 15px;min-height: 6px;border-radius: 3px;"></div>
                  <span class="subtext--text">{{ item.name }} - {{ item.percentage }}% </span>
                </div>
            </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>

    <!-- ROW-3 -->
    <v-row class="row3" >

      <!-- Top 5 Customers by over due amount -->
      <!-- obj: customers_by_overdue -->
      <v-col sm="12" md="8" lg="8">
        <v-card color="card_bg"  id="card">
          <v-card-title id="card-title">
            <h4>Top 5 Customers by over due amount</h4>
          </v-card-title>
          <v-card-text id="card-text">
            <div>
              <v-simple-table class="customersByOverDueAmount__table table_bg">
                <template v-slot:default>
                  <thead class="customersByOverDueAmount__thead">
                    <tr class="customersByOverDueAmount__tr">
                      <th class="customersByOverDueAmount__th text-left text--text h6 pr_5">
                        Customer<br/>Name
                      </th>
                      <th class="customersByOverDueAmount__th text-left text--text h6 pr_5">
                        Balance<br/>Due
                      </th>
                      <th class="customersByOverDueAmount__th text-left text--text h6 pr_5">
                        Within<br/>Due
                      </th>
                      <th class="customersByOverDueAmount__th text-left text--text h6 pr_5">
                        Over<br/>Due
                      </th>
                      <th class="customersByOverDueAmount__th text-left text--text h6">
                        Due<br/>Invoices
                      </th>
                      <th class="customersByOverDueAmount__th text-right text--text h6 credit_limit__con">
                        Above Credit<br/>Limit
                      </th>
                    </tr>
                    <div class="my-4"></div>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in customers_by_overdue" :key="index" class="ma-0 pa-0">
                      <td class="customersByOverDueAmount__td text-left text--text h6">{{ item.c_name }}</td>
                      <td class="customersByOverDueAmount__td text-left text--text pr_5 balance_due__td">
                        <div class="progress_bar__con">
                          <div class="progress_bar__line">
                            <span class="text--text txt_inside_pbl">AED{{ item.balance_due }}</span>
                          </div>
                        </div>
                      </td>
                      <td class="customersByOverDueAmount__td text-left text--text pr_5">{{ item.within_due }}</td>
                      <td class="customersByOverDueAmount__td text-left text--text pr_5">{{ item.over_due }}</td>
                      <td class="customersByOverDueAmount__td text-left text--text ">{{ item.due_invoice }}</td>
                      <td class="customersByOverDueAmount__td text-right text--text">{{ item.above_credit_limit }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table> 
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      
      <!-- Age analysis of due balance -->
      <!-- obj:  -->
      <v-col sm="12" md="4" lg="4">
        <v-card color="card_bg"  id="card">
          <v-card-title id="card-title">
            <h4>Age analysis of due balance</h4>
          </v-card-title>
          <v-card-text id="card-text">
            <div class="age_graph__con mt-5">
              <LineGraph />
              <v-divider id="divider" class="divider_border"></v-divider>
              <div class="age_graph__titles flex_row justify-space-around mt-2">
                <span class="caption">Title</span>
                <span class="caption">Title</span>
                <span class="caption">Title</span>
                <span class="caption">Title</span>
                <span class="caption">Title</span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>

    <!-- ROW-4 -->
    <v-row class="row4" >
    
    <!-- Recent Bank Transactions -->
    <!-- obj: bank_tran_data -->
    <v-col sm="12" md="4" lg="4">
      <v-card color="card_bg"  id="card">
        <v-card-title id="card-title">
          <h4>Recent Bank Transactions</h4>
          <!-- <div class="flex_row">
            <h5 class="text-text ma-0 pa-0 mr-3 pb-4">Notify Me</h5>
            <v-switch
            class="ma-0 pa-0"
            inset
            color="primary"
            ></v-switch>
          </div> -->
          <ReloadIcon />
        </v-card-title>
        <v-card-text id="card-text">
          <div class="bank_tran__con">
            <div class="bt__con" v-for="item in bank_tran_data" :key="item.id">
              <div class="bt__data flex_row my-3 py-3">
                <h4 v-if="item.amount >= 1000" class="green--text">+{{ item.amount }}aed</h4>
                <h4 v-if="item.amount < 1000" class="red--text">-{{ item.amount }}aed</h4>
                <span class="pl-3 text--subtitle">{{ item.name }}</span>
                <v-spacer></v-spacer>
                <h6 class="text--text">{{ item.date }}</h6>
              </div>
              <v-divider id="divider" class="divider_border ml-9"></v-divider>
          </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Sales vs Expense -->
    <!-- obj:  -->
    <v-col sm="12" md="8" lg="8">
      <v-card color="card_bg"  id="card">
        <v-card-title id="card-title">
          <h4 class="text--text">Sales vs Expense</h4>
          <div class="flex_row justify-space-between">
            <v-btn class="short__btn mr-2" outlined>Week</v-btn>
            <v-btn class="short__btn mr-2" outlined>Month</v-btn>
            <v-btn class="short__btn" color="primary">Year</v-btn>
          </div>
        </v-card-title>
        <v-card-text id="card-text">
          <!-- chart.js -->
        </v-card-text>
      </v-card>
    </v-col>

    </v-row>

    <!-- ROW-5 -->
    <v-row class="row5" >

    <!-- Sales Revenue by customer -->
    <!-- obj:  -->
    <v-col sm="12" md="6" lg="6">
      <v-card color="card_bg"  id="card">
        <v-card-title id="card-title">
          <h4 class="text--text">Sales Revenue by customer</h4>
          <div class="flex_row justify-space-between">
            <v-btn class="short__btn mr-2" outlined>Week</v-btn>
            <v-btn class="short__btn mr-2" outlined>Month</v-btn>
            <v-btn class="short__btn" color="primary">Year</v-btn>
          </div>
        </v-card-title>
        <v-card-text id="card-text">
          <!-- chart.js -->
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Income Statement -->
    <!-- obj:  -->
    <v-col sm="12" md="6" lg="6">
      <v-card color="card_bg"  id="card">
        <v-card-title id="card-title">
          <h4 class="text--text">Income Statement (in millions aed)</h4>
          <div class="flex_row justify-space-between">
            <v-btn class="short__btn mr-2" outlined>Week</v-btn>
            <v-btn class="short__btn mr-2" outlined>Month</v-btn>
            <v-btn class="short__btn" color="primary">Year</v-btn>
          </div>
        </v-card-title>
        <v-card-text id="card-text">
          <!-- chart.js -->
        </v-card-text>
      </v-card>
    </v-col>

    </v-row>

    <!-- ROW-5 -->
    <v-row class="row5" >

      <!-- Recent Expense -->
      <!-- obj: recent_expense_data -->
      <v-col sm="12" md="6" lg="6">
        <v-card color="card_bg"  id="card">
          <v-card-title id="card-title">
            <h4 class="text--text">Recent Expense</h4>
          </v-card-title>
          <v-card-text id="card-text">
            <div class="recent_ext__con">
              <div class="re__header flex_row justify-space-between">
                <span class="subtext--text">Name</span>
                <span class="subtext--text">Amount</span>
              </div>
              <div class="re__table_data" v-for="(item, index) in recent_expense_data" :key="index">
                <h6 class="text--text">{{ item.name }}</h6>
                <h6 class="text--text">{{ item.amount }}</h6>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Recent Sale -->
      <!-- obj: recent_sale_data -->
      <v-col sm="12" md="6" lg="6">
        <v-card color="card_bg"  id="card">
          <v-card-title id="card-title">
            <h4 class="text--text">Recent Sale</h4>
          </v-card-title>
          <v-card-text id="card-text">
            <div class="recent_sale__con">
              <table class="recent_sale__table">
                <thead class="recent_sale__thead">
                  <tr class="rs_th_tr">
                    <th class="subtext--text text-left">Name</th>
                    <th class="subtext--text text-left">Sales Rep</th>
                    <th class="subtext--text text-right">Amount</th>
                  </tr>
                </thead>
                <tbody class="recent_sale__tbody">
                  <tr class="rs_tbody_tr" style="" v-for="(item, index) in recent_sale_data" :key="index">
                    <td class="text--text text-left">{{ item.name }}</td>
                    <td class="text--text text-center pl-3" style="max-width: 50px"><v-img :src="item.img" width="30" height="30" /></td>
                    <td class="text--text text-right">{{ item.amount }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>

    <!-- FOOTER-->
    <Footer  />

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
   },
  data() {
    return {
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
        { name: 'New Requests', num: '21', per: '50%', color:'accent3' },
        { name: 'Recruitment', num: '07', per: '40%', color:'accent1' },
        { name: 'Cancelled', num: '03', per: '20%', color:'accent4' },
        { name: 'On Hold', num: '01', per: '10%', color:'primary' },
        { name: 'Unsuccessful', num: '05', per: '30%', color:'error' },
        { name: 'Selections', num: '04', per: '20%', color:'info' },
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
          { label: 'Date Type', placeholder: 'All', items: 'All' },
          { label: 'Month & Year', placeholder: 'All', items: 'All' },
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
        { c_name:'Massive Dynamic', balance_due: '23,785', within_due: '1/2/2023', over_due: '1,25,489', due_invoice: '13', above_credit_limit: 'Yes' },
        { c_name:'Massive Dynamic', balance_due: '23,785', within_due: '1/2/2023', over_due: '1,25,489', due_invoice: '13', above_credit_limit: 'Yes' },
        { c_name:'Massive Dynamic', balance_due: '23,785', within_due: '1/2/2023', over_due: '1,25,489', due_invoice: '13', above_credit_limit: 'Yes' },
        { c_name:'Massive Dynamic', balance_due: '23,785', within_due: '1/2/2023', over_due: '1,25,489', due_invoice: '13', above_credit_limit: 'Yes' },
        { c_name:'Massive Dynamic', balance_due: '23,785', within_due: '1/2/2023', over_due: '1,25,489', due_invoice: '13', above_credit_limit: 'Yes' },
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