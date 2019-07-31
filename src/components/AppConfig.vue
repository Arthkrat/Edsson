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
    <v-form>
        <v-btn class="px-15 mx-auto" dark color="teal lighten-1" elevation="5" block  @click="saveValues">{{ getConfig.actions[0].label }}</v-btn> 
    
        <v-flex row sm12  v-for="(row,rowIndex) in getConfig.schema.rows"  :key="`row-${rowIndex}`">
            <v-col sm6  v-for="(col, colIndex) in row.columns "   :key="`col-${colIndex}`">
            <div v-for="(element, elIndex) in col.elements" :key="`el-${elIndex}`" >  
                <v-text-field class="pa-0" label=id type="text" v-model="element.id" @keypress.enter="saveValues">  </v-text-field>
                <v-select class="pa-0" v-model="element.type" :items="types" label="type" ></v-select> 
                <v-text-field class="pa-0" label=Value :type="element.type" v-model="element.defaultValue" @keydown="validate($event, col.elements, elIndex)" @keypress.enter="saveValues"></v-text-field>
            </div>
          
            </v-col>
            <v-btn class="ma-auto" fab dark small color="teal lighten-2" @click="addCol(rowIndex)">+</v-btn>
        </v-flex>
        <v-flex sm12> 
            <v-btn class="mx-auto" fab dark small color="teal lighten-2"  @click="addRow()">+</v-btn>
        </v-flex>
      </v-form>
 </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

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
            ...mapActions([
                'addRow',
                'addCol'
            ]),
            saveValues(){
                this.$store.dispatch('saveValues');
                this.$router.push('/values')
            },
            validate($event, elements, index){
                elements[index].type=="number" ? $event.target.value = $event.target.value.replace(/[^0-9]/g,"")
                : true ;
            }
        }
}
</script>




