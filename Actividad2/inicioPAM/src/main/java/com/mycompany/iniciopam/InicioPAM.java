/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package com.mycompany.iniciopam;
import java.awt.event.*;
import javax.swing.*;
import java.awt.*;

/**
 *
 * @author WorkStation DELL
 */
public class InicioPAM {

        //creo los métodos
    public void Reglamento() {
                JOptionPane.showMessageDialog(null, "Reglamento POO\n"+
                        "1. Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.\n" +
            "2. Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia.\n" +
            "3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores.\n" +
            "4. Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea.\n" +
            "5. Las tareas y trabajos presentarlos en tiempo y forma.\n" +
            "6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.\n" +
            "7. El plagio o copia de trabajos y/o exámenes será sancionado.\n" +
            "8. Cualquier deshonestidad académica será sancionada.\n" +
            "9. Indisciplina o falta de respeto: tres incidencias → sin derecho a examen.\n" +
            "10. Uso de laptops/móviles solo para actividades.\n" +
            "11. Prohibido audífonos.\n" +
            "12. Prohibido comer o beber en clase.\n" +
            "13. Prohibido sentarse en mesas o columpiarse en sillas.\n" +
            "14. Resolver temas primero con docente, luego tutor, luego coordinación.\n" +
            "15. Lo no previsto → dirección.\n" +
            "16. Día de entrega de calificaciones: asistencia obligatoria.\n" +
            "17. El reglamento entra en vigor al firmarse o aprobarse en la primera sesión.")
           ;
    }
    public void Lineamientos() {
                JOptionPane.showMessageDialog(null, "Lineamientos Classroom\n"+
                        "Portada: <Diseño libre> <Logo UPQ, tema, datos del alumno, materia> \n" +
"Conclusión: <Descripción de lo aprendido durante el desarrollo de la actividad>");
    }
    public void Fechas() {
                JOptionPane.showMessageDialog(null, "Fechas de Parciales\n"+
                        "Primer parcial: 30 sep\n" +
"Segundo parcial: 4 nov\n" +
"Tercer parcial: 2 dic\n" +
"Final: 8 dic");
    }
    public void Porcentajes() {
                JOptionPane.showMessageDialog(null, "Porcentajes por Parcial\n\n"+
                        "                          1P  2P  3P\n"+
                        "Conocimiento  40  40  20 \n" +
"Desempeño     20  20  10 <- Participacion, trabajos, entregas, tiempos, calidad\n" +
"Producto          30  20  40\n" +
"Integrador        10  20  30");
    }

    
   
}
