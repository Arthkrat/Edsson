<template>
<v-container>
    <v-list-item-content class="ma-auto text-center text-capitalize " >
        <v-list-item-title class="display-1">
         Configure Your Layout!
        </v-list-item-title>
        <v-list-item-subtitle class="title">
            Press right plus button to add column
        </v-list-item-subtitle>
        <v-list-item-subtitle class="title">
            Press bottom plus button to add row
        </v-list-item-subtitle>
        <v-list-item-subtitle class="title">
            Press SAVE to get your layout!
        </v-list-item-subtitle>
    </v-list-item-content>
    <v-flex justify-center>
        <v-btn class="px-15 mx-auto" dark color="teal lighten-1" elevation="5" block @click="saveValues">{{ getConfig.actions[0].label }}</v-btn> 
    </v-flex>
        <v-flex row sm12  v-for="(row,rowIndex) in getConfig.schema.rows"  :key= rowIndex>
            <v-col sm6  v-for="(col, colIndex) in row.columns "   :key=colIndex>
            <div v-for="(element, index) in col.elements" :key=index >  
                <v-text-field class="pa-0" label=id type="text" v-model="element.id">  </v-text-field>
                <v-select class="pa-0" v-model="element.type" :items="types" label="type" ></v-select> 
                <v-text-field class="pa-0" label=Value :type="element.type" v-model="element.defaultValue" @keydown="validate($event, col.elements, index)"></v-text-field>
            </div>
          
            </v-col>
            <v-btn class="ma-auto" fab dark small color="teal lighten-2" @click="addCol(rowIndex)">+</v-btn>
        </v-flex>
        <v-flex sm12> 
            <v-btn class="mx-auto" fab dark small color="teal lighten-2"  @click="addRow()">+</v-btn>
        </v-flex>
      
 </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data(){
        return {
            types: ['text', 'number']
        }
    },
    computed: {
        ...mapGetters([
            'getConfig',
            'getSavedValues'
        ]),
    },
        methods: {
            addRow(){
                this.$store.commit('addRow');
            },
            addCol(index){
                this.$store.commit('addCol', index);
            },
            saveValues(){
                this.$store.commit('saveValues');
                this.$router.push('/values')
            },
            validate($event, elements, index){
                elements[index].type=="number" ? $event.target.value = $event.target.value.replace(/[^0-9]/g,"")
                : true ;
            }
        }
  /*  created() {
        this.$store.dispatch('getConfigFile');
    }*/
}
</script>




