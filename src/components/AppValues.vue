<template>
     <v-container>
       <v-flex justify-center>
            <v-btn class="px-15 mx-auto" color="teal lighten-1" dark elevation="5" block @click="editVal">edit</v-btn> 
       </v-flex>
       <v-layout  md12 row nowrap v-for="(row,rowIndex) in getSavedValues"
            :key="`row-${rowIndex}`"
            >
            <v-flex  v-for="(col, colIndex) in row.columns " v-show="col.elements[0].defaultValue !=''"   :key="`col-${colIndex}`"
            >
            <v-card class="pa-2 ma-2" elevation="10" xs2 v-for="(element, elIndex) in col.elements" :key="`el-${elIndex}`"  v-show="element.defaultValue && element.type !=''">  
                <p class="pa-1"> {{element.type}} </p>
                <p class="pa-1"> {{element.defaultValue}} </p>
                
          </v-card>
          
            </v-flex>
       </v-layout >
    </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'getSavedValues'
        ])
    },
    methods: {
      editVal(){
        this.$router.push('/config')
      }
    }
}
</script>
