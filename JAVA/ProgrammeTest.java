public class ProgrammeTest {

	public static void main(String[] args) {

		System.out.println("------- Etape 1 : -----------------------------------------------");

		
		/*
			Etape 1 : 
			Écrivez un programme qui imprime les nombres de 1 à 100. 
			Mais pour les multiples de trois, imprimez « Fizz » au lieu du nombre 
			et pour les multiples de cinq, imprimez « Buzz ». Pour les nombres qui 
			sont des multiples de trois et de cinq, écrivez « FizzBuzz ».
		*/

		for (int i = 1; i <= 100; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }
        }   

        System.out.println("------- Etape 2 : -----------------------------------------------");

		/*
			Etape 1 : 
			Écrivez un programme qui imprime les nombres de 1 à 100. 
			Mais pour les multiples de trois, imprimez « Fizz » au lieu du nombre 
			et pour les multiples de cinq, imprimez « Buzz ». Pour les nombres qui 
			sont des multiples de trois et de cinq, écrivez « FizzBuzz ».
		*/

        for (int i = 1; i <= 100; i++) {

        	String chaine = "";

        	boolean divisible3 = i % 3 == 0; 
            boolean divisible5 = i % 5 == 0;
            boolean contient3 = String.valueOf(i).contains("3");
            boolean contient5 = String.valueOf(i).contains("5");

            if (contient3) {
                chaine += "Fizz";
            }  
            if (contient5) {
                chaine += "Buzz";
            }  
            if (divisible3) {
                chaine += "Fizz";
            }  
            if (divisible5) {
                chaine += "Buzz";
            }  

            if (chaine.isEmpty()) {
            	System.out.println(i);
            } else {
            	System.out.println(chaine);
            }
        }
        
        System.out.println("-----------------------------------------------");

	}
}