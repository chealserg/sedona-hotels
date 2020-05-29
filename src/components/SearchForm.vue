<template>

<b-row class="text-center searchform">
   
        <div class="form-search">
            <div class="form-header-text">
                <h4>search for accomodation in Sedona</h4>
            </div>

            <div class="inner-form-content">
                <div class="check-in-date">
                    <label for="check-in">check in:</label>
                    <b-form-datepicker class="datefield" id="check-in" placeholder="24 April 2019" local="en"></b-form-datepicker>
                </div>
                <div class="check-out-date">
                    <label for="check-out">check out:</label>
                    <b-form-datepicker class="datefield" id="check-out" placeholder="4 July 2019" local="en"></b-form-datepicker>
                </div>
                <div class="d-inline-block">
                    <div class="adults">
                        <label for="adults-number">Adults:</label>
                         <b-form-spinbutton id="adults-number" value="2" inline></b-form-spinbutton>
                    </div>
                    <div class="kids">
                         <label for="kids-number">Kids:</label>
                        <b-form-spinbutton id="kids-number" value="0" inline></b-form-spinbutton>
                    </div>
                 </div>
                <div class="button-form">
                    <b-button block>search</b-button>
                </div>
        </div>
   </div>
</b-row>
</template>

<script>
export default {

}
</script>

<style scoped>


h4 {
 color: white;;
 font-size: 21px !important;
 font-weight: 600 !important;
}

.searchform {
    padding: 20px 20px;
}

.datefield {
    width: 350px;
}

.check-in-date,
.check-out-date {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

 label {
    margin:0;
    font-weight: 600;
 }

 .form-search {
    width: 100%;
}

 .searchform {
    padding: 0px;
    margin: 0px;

    position: absolute;
    right: 1150px;
    z-index: 1000;

    width: 560px;
    height: 480px;


    background: #cccccc;
 }

 .form-header-text {
    margin:0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #6c757d;
    min-height: 85px;
}

.inner-form-content {
    padding: 40px 50px 55px 60px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;


    height: 400px;

    background-color: white;
}

.adults {
    float: left;
}

.kids {
    float: right;
}

.b-form-spinbutton {
    margin-left: 45px;
}

.b-form-btn-label-control.form-control > label {
    font-weight: 600;
}

.btn-block {
    font-size: 21px;
    text-transform: uppercase;
    font-weight: 600;
}

button.btn.btn-secondary.btn-block {
    border: none;
    background-color: #81b3d2;
}

</style>