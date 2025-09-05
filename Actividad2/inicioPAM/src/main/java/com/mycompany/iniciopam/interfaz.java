/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.iniciopam;
import java.awt.event.*;
import javax.swing.*;
import java.awt.*;
/**
 *
 * @author WorkStation DELL
 */
public class interfaz extends JFrame{
    private InicioPAM in;
    public interfaz(){
        super("Actividad No.2");
        in = new InicioPAM();
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(300, 200);
        
        JButton button = new JButton("Reglamento POO");
        JButton button2 = new JButton("Lineamientos Classroom");
        JButton button3 = new JButton("Fechas de Parciales");
        JButton button4 = new JButton("Porcentajes por Parcial");
        
        button.addActionListener(e -> in.Reglamento());
        button2.addActionListener(e -> in.Lineamientos());
        button3.addActionListener(e -> in.Fechas());
        button4.addActionListener(e -> in.Porcentajes());
        
        setLayout(new FlowLayout());
        add(button);
        add(button2);
        add(button3);
        add(button4);

        setVisible(true);
    }
     public static void main(String[] args) {
        new interfaz(); 
    }
        
}
