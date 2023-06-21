function SubA(what){
    
    subjectaa = document.getElementById('subject-a-a').value
    subjectab = document.getElementById('subject-a-b').value

    numaa = parseInt(subjectaa)
    numab = parseInt(subjectab)

    if(what == "real-result"){

        ExamA = Math.round(( 89.5 - (numaa+numab) ) * 2)    
        if(ExamA <= 100){ //성취도 A
            document.getElementById('subject-a-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도 <span style='color:#4eed83;'>" + String(ExamA) + "</span>점 이상이여야 성취도 A 입니다."
        }
        if(ExamA > 100){
            ExamA = Math.round(( 79.5 - (numaa+numab) ) * 2)
            document.getElementById('subject-a-result').innerHTML = "성취도 A를 받을 수 없습니다."
        }
    }
    if(what=="other-result"){

        ExamA_B = Math.round(( 79.5 - (numaa+numab) ) * 2)
        ExamA_B_text = ""
        if(ExamA_B > 100){
            ExamA_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamA_B <= 100){
            ExamA_B_text = "적어도 " + String(Math.round(ExamA_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamA_B < 0){
            ExamA_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamA_C = Math.round(( 69.5 - (numaa+numab) ) * 2)
        ExamA_C_text = ""
        if(ExamA_C > 100){
            ExamA_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamA_C <= 100){
            ExamA_C_text = "적어도 " + String(Math.round(ExamA_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamA_C < 0){
            ExamA_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamA_D = Math.round(( 59.5 - (numaa+numab) ) * 2)
        ExamA_D_text = ""
        if(ExamA_D > 100){
            ExamA_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamA_D <= 100){
            ExamA_D_text = "적어도 " + String(Math.round(ExamA_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamA_D < 0){
            ExamA_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamA_E = Math.round(( 49.5 - (numaa+numab) ) * 2)
        ExamA_E_text = ""
        if(ExamA_E > 100){
            ExamA_E_text = "성취도 E를 맞을 수 없습니다."
        }
        if(ExamA_E <= 100 ){
            ExamA_E_text = "적어도 " + String(Math.round(ExamA_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamA_E < 0){
            ExamA_E_text = "성취도 E는 나오지 않습니다."
        }

        alert(ExamA_B_text + ExamA_C_text + ExamA_D_text + ExamA_E_text)
    }

    //alert(ExamA)
        
}

function SubB(what){
    subjectba = document.getElementById('subject-b-a').value //중간고사 점수
    subjectbb = document.getElementById('subject-b-b').value //글쓰기20
    subjectbc = document.getElementById('subject-b-c').value //단어10
    subjectbd = document.getElementById('subject-b-d').value //단어10
    numba = parseInt(subjectba)
    numbb = parseInt(subjectbb)
    numbc = parseInt(subjectbc)
    numbd = parseInt(subjectbd) //영어 50 : 50

    if(what == "real-result"){
        ExamB = Math.round((89.5 - ((numba*0.25)+numbb+numbc+numbd)) * 4)
        //alert(ExamB)
        if(ExamB <= 100){
            document.getElementById('subject-b-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도 <span style='color:#4eed83;'>" + String(Math.round(ExamB)) + "</span>점 이상이여야 성취도 A 입니다."
        }
        if(ExamB > 100){
            document.getElementById('subject-b-result').innerHTML = "성취도 A를 받을 수 없습니다."
        } //!A{}
    }
    if(what=="other-result"){ //numbb+numbc+numbd+numbe = 35(if perfect score)
        
        ExamB_B = Math.round((79.5 - ((numba*0.25)+numbb+numbc+numbd)) * 4)
        ExamB_B_text = ""
        if(ExamB_B > 100){
            ExamB_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamB_B <= 100){
            ExamB_B_text = "적어도 " + String(Math.round(ExamB_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamB_B < 0){
            ExamB_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamB_C = Math.round((69.5 - ((numba*0.25)+numbb+numbc+numbd)) * 4)
        ExamB_C_text = ""
        if(ExamB_C > 100){
            ExamB_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamB_C <= 100){
            ExamB_C_text = "적어도 " + String(Math.round(ExamB_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamB_C < 0){
            ExamB_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamB_D = Math.round((59.5 - ((numba*0.25)+numbb+numbc+numbd)) * 4)
        ExamB_D_text = ""
        if(ExamB_D > 100){
            ExamB_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamB_D <= 100){
            ExamB_D_text = "적어도 " + String(Math.round(ExamB_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamB_D < 0){
            ExamB_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamB_E = Math.round((49.5 - ((numba*0.25)+numbb+numbc+numbd)) * 4)
        ExamB_E_text = ""
        if(ExamB_E > 100){
            ExamB_E_text = "성취도 E를 맞을 수 없습니다."
        }
        if(ExamB_E <= 100 ){
            ExamB_E_text = "적어도 " + String(Math.round(ExamB_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamB_E < 0){
            ExamB_E_text = "성취도 E는 나오지 않습니다."
        }

        alert(ExamB_B_text + ExamB_C_text + ExamB_D_text + ExamB_E_text)
    }

}

function SubC(what){
    subjectca = document.getElementById('subject-c-a').value//중간
    subjectcb = document.getElementById('subject-c-b').value//제곱근15
    subjectcc = document.getElementById('subject-c-c').value//인수분해15
    subjectcd = document.getElementById('subject-c-d').value//포트폴리오10

    numca = parseInt(subjectca)
    numcb = parseInt(subjectcb)
    numcc = parseInt(subjectcc)
    numcd = parseInt(subjectcd)

    if(what== "real-result"){
        ExamC = Math.round((89.5 - ((numca*0.3)+numcb+numcc+numcd)) * 10 / 3)
        if (ExamC <= 100){
            document.getElementById('subject-c-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도 <span style='color:#4eed83;'>" + String(Math.round(ExamC)) + "</span>점 이상이여야 성취도 A 입니다."
        }
        if(ExamC > 100){
            document.getElementById('subject-c-result').innerHTML = "성취도 A를 받을 수 없습니다."
        }   
    }
    if(what=="other-result"){
        ExamC_B = Math.round((79.5 - ((numca*0.3)+numcb+numcc+numcd)) * 10 / 3)
        ExamC_B_text = ""
        if(ExamC_B > 100){
            ExamC_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamC_B <= 100){
            ExamC_B_text = "적어도 " + String(Math.round(ExamC_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamC_B < 0){
            ExamC_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamC_C = Math.round((69.5 - ((numca*0.3)+numcb+numcc+numcd)) * 10 / 3)
        ExamC_C_text = ""
        if(ExamC_C > 100){
            ExamC_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamC_C <= 100){
            ExamC_C_text = "적어도 " + String(Math.round(ExamC_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamC_C < 0){
            ExamC_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamC_D = Math.round((59.5 - ((numca*0.3)+numcb+numcc+numcd)) * 10 / 3)
        ExamC_D_text = ""
        if(ExamC_D > 100){
            ExamC_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamC_D <= 100){
            ExamC_D_text = "적어도 " + String(Math.round(ExamC_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamC_D < 0){
            ExamC_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamC_E = Math.round((49.5 - ((numca*0.3)+numcb+numcc+numcd)) * 10 / 3)
        ExamC_E_text = ""
        if(ExamC_E > 100){
            ExamC_E_text = "성취도 E를 맞을 수 없습니다."
        }
        if(ExamC_E <= 100 ){
            ExamC_E_text = "적어도 " + String(Math.round(ExamC_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamC_E < 0){
            ExamC_E_text = "성취도 E는 나오지 않습니다."
        }

        alert(ExamC_B_text + ExamC_C_text + ExamC_D_text + ExamC_E_text)
    }

}

function SubD(what){
    subjectda = document.getElementById('subject-d-a').value
    subjectdb = document.getElementById('subject-d-b').value
    subjectdc = document.getElementById('subject-d-c').value

    numda = parseInt(subjectda)
    numdb = parseInt(subjectdb)
    numdc = parseInt(subjectdc)

    if(what== "real-result"){ //
        ExamD = Math.round(( 89.5 - (numda+numdb+numdc) ) * 2)    
        if(ExamD <= 100){
            document.getElementById('subject-d-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도 <span style='color:#4eed83;'>" + String(ExamD) + "</span>점 이상이여야 성취도 A 입니다."
        }
        if(ExamD > 100){
            document.getElementById('subject-d-result').innerHTML = "성취도 A를 받을 수 없습니다."
        }
    }
    if(what=="other-result"){

        ExamD_B = Math.round(( 79.5 - (numda+numdb+numdc) ) * 2)    
        ExamD_B_text = ""
        if(ExamD_B > 100){
            ExamD_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamD_B <= 100){
            ExamD_B_text = "적어도 " + String(Math.round(ExamD_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamD_B < 0){
            ExamD_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamD_C = Math.round(( 69.5 - (numda+numdb+numdc) ) * 2)    
        ExamD_C_text = ""
        if(ExamD_C > 100){
            ExamD_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamD_C <= 100){
            ExamD_C_text = "적어도 " + String(Math.round(ExamD_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamD_C < 0){
            ExamD_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamD_D = Math.round(( 59.5 - (numda+numdb+numdc) ) * 2)    
        ExamD_D_text = ""
        if(ExamD_D > 100){
            ExamD_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamD_D <= 100){
            ExamD_D_text = "적어도 " + String(Math.round(ExamD_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamD_D < 0){
            ExamD_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamD_E = Math.round(( 49.5 - (numda+numdb+numdc) ) * 2)    
        ExamD_E_text = ""
        if(ExamD_E > 100){
            ExamD_E_text = "성취도 E를 맞을 수 없습니다."
        }
        if(ExamD_E <= 100 ){
            ExamD_E_text = "적어도 " + String(Math.round(ExamD_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamD_E < 0){
            ExamD_E_text = "성취도 E는 나오지 않습니다."
        }

        alert(ExamD_B_text + ExamD_C_text + ExamD_D_text + ExamD_E_text)
    }

}

function SubE(what){ //과학 //    
    subjectea = document.getElementById('subject-e-a').value
    subjecteb = document.getElementById('subject-e-b').value
    subjectec = document.getElementById('subject-e-c').value

    numea = parseInt(subjectea)
    numeb = parseInt(subjecteb)
    numec = parseInt(subjectec)

    if(what=="real-result"){
        ExamE = Math.round(( 89.5 - (numea+numeb+numec) ) * 2)
        if(ExamE <= 100){
            document.getElementById('subject-e-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도 <span style='color:#4eed83;'>" + String(ExamE) + "</span>점 이상이여야 성취도 A 입니다."
        }
        if(ExamE >100){
            document.getElementById('subject-e-result').innerHTML = "성취도 A를 받을 수 없습니다."
        }
    }
    if(what=="other-result"){

        ExamE_B = Math.round(( 79.5 - (numea+numeb+numec) ) * 2)
        ExamE_B_text = ""
        if(ExamE_B > 100){
            ExamE_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamE_B <= 100){
            ExamE_B_text = "적어도 " + String(Math.round(ExamE_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamE_B < 0){
            ExamE_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamE_C = Math.round(( 69.5 - (numea+numeb+numec) ) * 2)
        ExamE_C_text = ""
        if(ExamE_C > 100){
            ExamE_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamE_C <= 100){
            ExamE_C_text = "적어도 " + String(Math.round(ExamE_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamE_C < 0){
            ExamE_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamE_D = Math.round(( 59.5 - (numea+numeb+numec) ) * 2)
        ExamE_D_text = ""
        if(ExamE_D > 100){
            ExamE_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamE_D <= 100){
            ExamE_D_text = "적어도 " + String(Math.round(ExamE_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamE_D < 0){
            ExamE_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamE_E = Math.round(( 49.5 - (numea+numeb+numec) ) * 2)
        ExamE_E_text = ""
        if(ExamE_E > 100){
            ExamE_E_text = "성취도 E를 맞을 수 없습니다."
        }
        if(ExamE_E <= 100 ){
            ExamE_E_text = "적어도 " + String(Math.round(ExamE_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamE_E < 0){
            ExamE_E_text = "성취도 E는 나오지 않습니다."
        }

        alert(ExamE_B_text + ExamE_C_text + ExamE_D_text + ExamE_E_text)
    }

}

function SubF(what){ //사회 //
    subjectfa = document.getElementById('subject-f-a').value
    subjectfb = document.getElementById('subject-f-b').value

    numfa = parseInt(subjectfa)
    numfb = parseInt(subjectfb)

    if(what == "real-result"){
        ExamF = Math.round(( 89.5 - (numfa+numfb) ) * 2)
        if(ExamF <= 100){
            document.getElementById('subject-f-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도<span style='color:#4eed83;'> " + String(ExamF) + "</span>점 이상이여야 성취도 A 입니다."
        }
        if(ExamF > 100){
            document.getElementById('subject-f-result').innerHTML = "성취도 A를 받을 수 없습니다."
        }
    }
    if(what=="other-result"){

        ExamF_B = Math.round(( 79.5 - (numfa+numfb) ) * 2)
        ExamF_B_text = ""
        if(ExamF_B > 100){
            ExamF_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamF_B <= 100){
            ExamF_B_text = "적어도 " + String(Math.round(ExamF_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamF_B < 0){
            ExamF_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamF_C = Math.round(( 69.5 - (numfa+numfb) ) * 2)
        ExamF_C_text = ""
        if(ExamF_C > 100){
            ExamF_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamF_C <= 100){
            ExamF_C_text = "적어도 " + String(Math.round(ExamF_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamF_C < 0){
            ExamF_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamF_D = Math.round(( 59.5 - (numfa+numfb) ) * 2)
        ExamF_D_text = ""
        if(ExamF_D > 100){
            ExamF_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamF_D <= 100){
            ExamF_D_text = "적어도 " + String(Math.round(ExamF_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamF_D < 0){
            ExamF_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamF_E = Math.round(( 49.5 - (numfa+numfb) ) * 2)
        ExamF_E_text = ""
        if(ExamF_E > 100){
            ExamF_E_text = "성취도 E를 맞을 수 없습니다."
        }
        if(ExamF_E <= 100 ){
            ExamF_E_text = "적어도 " + String(Math.round(ExamF_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamF_E < 0){
            ExamF_E_text = "성취도 E는 나오지 않습니다."
        }

        alert(ExamF_B_text + ExamF_C_text + ExamF_D_text + ExamF_E_text)
    }
    


}

function SubG(what){ //기가 
    subjectga = document.getElementById('subject-g-a').value
    subjectgb = document.getElementById('subject-g-b').value
    subjectgc = document.getElementById('subject-g-c').value

    numga = parseInt(subjectga)
    numgb = parseInt(subjectgb)
    numgc = parseInt(subjectgc)

    if(what=="real-result"){

        ExamG = Math.round(( 89.5 - (numga+numgb+numgc) ) * 2)
        if(ExamG <= 100){
            document.getElementById('subject-g-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도<span style='color:#4eed83;'> " + String(ExamG) + "</span>점 이상이여야 성취도 A 입니다."
        }
        if(ExamG > 100){
            document.getElementById('subject-g-result').innerHTML = "성취도 A를 받을 수 없습니다."
        }
    }
    if(what=="other-result"){

        ExamG_B = Math.round(( 79.5 - (numga+numgb+numgc) ) * 2)
        ExamG_B_text = ""
        if(ExamG_B > 100){
            ExamG_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamG_B <= 100){
            ExamG_B_text = "적어도 " + String(Math.round(ExamG_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamG_B < 0){
            ExamG_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamG_C = Math.round(( 69.5 - (numga+numgb+numgc) ) * 2)
        ExamG_C_text = ""
        if(ExamG_C > 100){
            ExamG_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamG_C <= 100){
            ExamG_C_text = "적어도 " + String(Math.round(ExamG_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamG_C < 0){
            ExamG_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamG_D = Math.round(( 59.5 - (numga+numgb+numgc) ) * 2)
        ExamG_D_text = ""
        if(ExamG_D > 100){
            ExamG_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamG_D <= 100){
            ExamG_D_text = "적어도 " + String(Math.round(ExamG_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamG_D < 0){
            ExamG_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamG_E = Math.round(( 49.5 - (numga+numgb+numgc) ) * 2)
        ExamG_E_text = ""
        if(ExamG_E > 100){
            ExamG_E_text = "성취도 E를 맞을 수 없습니다."
        }
        if(ExamG_E <= 100 ){
            ExamG_E_text = "적어도 " + String(Math.round(ExamG_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamG_E < 0){
            ExamG_E_text = "성취도 E는 나오지 않습니다."
        }

        alert(ExamG_B_text + ExamG_C_text + ExamG_D_text + ExamG_E_text)
    }

}

function SubH(what){ //
    
    subjectha = document.getElementById('subject-h-a').value
    subjecthb = document.getElementById('subject-h-b').value

    numha = parseInt(subjectha)
    numhb = parseInt(subjecthb)

    if(what == "real-result"){

        ExamH = Math.round(( 89.5 - (numha+numhb) ) * 2)
        if(ExamH <= 100){ //성취도 A
            document.getElementById('subject-h-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도 <span style='color:#4eed83;'>" + String(ExamH) + "</span>점 이상이여야 성취도 A 입니다."
        }
        if(ExamH > 100){
            ExamH = Math.round(( 79.5 - (numha+numhb) ) * 2)
            document.getElementById('subject-h-result').innerHTML = "성취도 A를 받을 수 없습니다."
        }
    }
    if(what=="other-result"){

        ExamH_B = Math.round(( 79.5 - (numha+numhb) ) * 2)
        ExamH_B_text = ""
        if(ExamH_B > 100){
            ExamH_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamH_B <= 100){
            ExamH_B_text = "적어도 " + String(Math.round(ExamH_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamH_B < 0){
            ExamH_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamH_C = Math.round(( 69.5 - (numha+numhb) ) * 2)
        ExamH_C_text = ""
        if(ExamH_C > 100){
            ExamH_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamH_C <= 100){
            ExamH_C_text = "적어도 " + String(Math.round(ExamH_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamH_C < 0){
            ExamH_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamH_D = Math.round(( 59.5 - (numha+numhb) ) * 2)
        ExamH_D_text = ""
        if(ExamH_D > 100){
            ExamH_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamH_D <= 100){
            ExamH_D_text = "적어도 " + String(Math.round(ExamH_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamH_D < 0){
            ExamH_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamH_E = Math.round(( 49.5 - (numha+numhb) ) * 2)
        ExamH_E_text = ""
        if(ExamH_E > 100){
            ExamH_E_text = "성취도 E를 맞을 수 없습니다."
        }
        if(ExamH_E <= 100 ){
            ExamH_E_text = "적어도 " + String(Math.round(ExamH_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamH_E < 0){
            ExamH_E_text = "성취도 E는 나오지 않습니다."
        }

        alert(ExamH_B_text + ExamH_C_text + ExamH_D_text + ExamH_E_text)
    }

    //alert(ExamA)
        
}
function SubI(what){ //
    
    subjectia = document.getElementById('subject-i-a').value
    subjectib = document.getElementById('subject-i-b').value

    numia = parseInt(subjectia)
    numib = parseInt(subjectib)

    if(what == "real-result"){

        ExamI = Math.round(( 89.5 - (numia+numib) ) * 2)
        if(ExamI <= 100){ //성취도 A
            document.getElementById('subject-i-result').innerHTML = "수행평가 점수가 위와 같을 때, 기말 점수가 적어도 <span style='color:#4eed83;'>" + String(ExamI) + "</span>점 이상이여야 성취도 A 입니다."
        }
        if(ExamI > 100){
            ExamI = Math.round(( 79.5 - (numia+numib) ) * 2)
            document.getElementById('subject-i-result').innerHTML = "성취도 A를 받을 수 없습니다."
        }
    }
    if(what=="other-result"){

        ExamI_B = Math.round(( 79.5 - (numia+numib) ) * 2)
        ExamI_B_text = ""
        if(ExamI_B > 100){
            ExamI_B_text = "성취도 B를 맞을 수 없습니다."
        }
        if(ExamI_B <= 100){
            ExamI_B_text = "적어도 " + String(Math.round(ExamI_B)) + "점을 맞으면 성취도 B입니다."
        }
        if(ExamI_B < 0){
            ExamI_B_text = "성취도 B는 나오지 않습니다."
        }

        ExamI_C = Math.round(( 69.5 - (numia+numib) ) * 2)
        ExamI_C_text = ""
        if(ExamI_C > 100){
            ExamI_C_text = "성취도 C를 맞을 수 없습니다."
        }
        if(ExamI_C <= 100){
            ExamI_C_text = "적어도 " + String(Math.round(ExamI_C)) + "점을 맞으면 성취도 C입니다."
        }
        if(ExamI_C < 0){
            ExamI_C_text = "성취도 C는 나오지 않습니다."
        }

        ExamI_D = Math.round(( 59.5 - (numia+numib) ) * 2)
        ExamI_D_text = ""
        if(ExamI_D > 100){
            ExamI_D_text = "성취도 D를 맞을 수 없습니다."
        }
        if(ExamI_D <= 100){
            ExamI_D_text = "적어도 " + String(Math.round(ExamI_D)) + "점을 맞으면 성취도 D입니다."
        }
        if(ExamI_D < 0){
            ExamI_D_text = "성취도 D는 나오지 않습니다."
        }

        ExamI_E = Math.round(( 49.5 - (numia+numib) ) * 2)
        ExamI_E_text = ""
        if(ExamI_E > 100){
            ExamI_E_text = "성취도 E를 맞을 수 없습니다."
        }
        if(ExamI_E <= 100 ){
            ExamI_E_text = "적어도 " + String(Math.round(ExamI_E)) + "점을 맞으면 성취도 E입니다."
        }
        if(ExamI_E < 0){
            ExamI_E_text = "성취도 E는 나오지 않습니다."
        }

        alert(ExamI_B_text + ExamI_C_text + ExamI_D_text + ExamI_E_text)
    }

    //alert(ExamA)
        
}
