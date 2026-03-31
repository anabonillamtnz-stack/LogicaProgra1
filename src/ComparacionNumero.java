
import java.util.Arrays;
import java.util.Scanner;

public class ComparacionNumero {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("¡Hola, vamos a comparar sus 3 números de mayor a menor y de menor a mayor!");


        System.out.println("Introduzca su primer numero (puede ser en decimales): ");
        double num1 = scanner.nextDouble();

        System.out.println("Introduzca su primer numero (puede ser en decimales): ");
        double num2 = scanner.nextDouble();

        System.out.println("Introduzca su primer numero (puede ser en decimales): ");
        double num3 = scanner.nextDouble();

        double [] numbers = {num1, num2, num3};
        Arrays.sort(numbers);
        System.out.println("Tus números de menor a mayor son: " + Arrays.toString(numbers));

        System.out.println("Tus números de menor a mayor son: " + "[" + numbers[2] + ", " + numbers[1] + ", " + numbers[0]+ "]");

        System.out.println("Tu número de enmedio es: " + numbers[1]);

        System.out.println("Sus números son iguales: " + (num1 == num2 && num2 == num3) );








    }
}
