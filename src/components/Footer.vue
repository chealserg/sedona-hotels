<template>
  <b-row class="footer-block bg-light align-items-center" >
    <b-col>#visitsedona</b-col>
    <b-col>
        <div class="d-flex justify-content-center align-items-center">
            <div class="bg-icon">
                <img src="../assets/t.png">
            </div>
            <div class="bg-icon">
                <img src="../assets/youtube.png">
            </div>
            <div class="bg-icon">
                 <img src="../assets/fb.png">
            </div>
        </div>
    </b-col>
    <b-col>Bootstrap Vue</b-col>
  </b-row>
</template>

<script>
export default {

}
</script>

<style scoped>



.footer-block  {
    position: relative;
    margin: 0;
    padding: 0;
    margin-top: -120px;
    min-height: 120px;
    z-index: 1003;
}

.bg-icon {
    padding: 10px;
    margin-left:   8px;
    height: 50px;
    width: 50px;

    background-color: #81b3d2;
}

.row.footer-block.bg-light.align-items-center {
    opacity: 0.9;
}


</style>