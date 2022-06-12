function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "123456") {return "كيف اقوم بمساعدتك";} 
        else if (input == "اريد معرفة النتيجة")
        {return "انت ناجح بتقدير ممتاز";} 
        else if (input == "حبيبي"){return "غلاااااي";} else if (input == "احتاج الجدول الدراسي للفرقة الرابعة"){return " سيتم ارسال الجدول علي الجيميل الخاص بك ";} else if (input == "التواصل مع احد موظفي ادارة الكلية"){return "رقم الاستاذ.......يمكنك التواصل معه";} else if (input == "hi"){return "من فضلك تحدث باللغة العربية";} else if (input == "شروط الالتحاق"){return "يمكنك الدخول الي الحياه الاكاديمية";}
        else {return "يمكنك الإستعانه بــ : اريد معرفة النتيجة - الجدول الدراسى";}
    
}