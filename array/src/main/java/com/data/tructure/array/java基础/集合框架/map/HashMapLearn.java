package com.data.tructure.array.java基础.集合框架.map;

import lombok.Synchronized;

import org.junit.Test;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

/**
 * @author cuishifeng
 * @date 2019-03-13
 */
public class HashMapLearn {


    @Test
    public void test8() throws Exception {

        HashMap hashMap = new HashMap(12);
        hashMap.put("hello", 123);
        hashMap.get("hello");
        hashMap.remove("hello");
        System.out.println(hashMap);
        int[] a = new int[10];
        System.out.println(a.length);
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();

        Collections.synchronizedMap(hashMap).put("hello", "疯狂造轮子");

    }

    /**
     * 模拟JDK7 hashMap复制链表到新数组逻辑测试
     */
    @Test
    public void testTransfer() throws Exception {
        Entry entry2 = new Entry(2, "5", "B", null);
        Entry entry1 = new Entry(2, "3", "A", entry2);

        table[0] = entry1;
        CountDownLatch countDownLatch = new CountDownLatch(2);
        new Thread(new Runnable() {
            @Override
            public void run() {
                transfer(newTable, false);
                countDownLatch.countDown();
            }
        }, "Thread1").start();

        new Thread(new Runnable() {
            @Override
            public void run() {
                transfer(newTable, false);
                countDownLatch.countDown();
            }
        }, "Thread2").start();

        countDownLatch.await();
        Entry entry = newTable[3];
        while (null != entry) {
            System.out.println("key:" + entry.key);
            entry = entry.next;
        }

        TimeUnit.HOURS.sleep(1);
    }

    Entry[] table = new Entry[2];
    Entry[] newTable = new Entry[5];


    void transfer(Entry[] newTable, boolean rehash) {
        int newCapacity = newTable.length;
        for (Entry e : table) {
            while (null != e) {
                Entry next = e.next;
                if (rehash) {
                    e.hash = null == e.key ? 0 : hash(e.key);
                }
                //                指定下标位置
                //                int i = indexFor(e.hash, newCapacity);
                int i = 3;
                e.next = newTable[i];
                newTable[i] = e;
                e = next;
            }
        }
    }

    class Entry {
        final String key;
        String value;
        Entry next;
        int hash;

        /**
         * Creates new entry.
         */
        Entry(int h, String k, String v, Entry n) {
            value = v;
            next = n;
            key = k;
            hash = h;
        }
    }


    @Test
    public void test6() throws Exception {
        //        System.out.println(tableSizeFor(134));

        String key = "123";
        System.out.println(key.hashCode() & (16 - 1));
        System.out.println(key.hashCode() & 16);
        System.out.println(key.hashCode() & (32 - 1));
        System.out.println(key.hashCode() & 32);
        System.out.println("-------------------");
        System.out.println(15 & 16);

    }

    static final int tableSizeFor(int cap) {
        int n = cap - 1;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        return (n < 0) ? 1 : (n >= Integer.MAX_VALUE) ? Integer.MAX_VALUE : n + 1;
    }

    public static void main(String[] args) {

        HashMap hashMap = new HashMap(16);
        hashMap.put("hello.txt", "you");

        System.out.println(tableSizeFor(100));
        hashMap.get("hello.txt");

        for (int i = 0; i < 20; i++) {
            // 1. 使用 Collections.synchronizedMap 实现线程安全操作
            Collections.synchronizedMap(hashMap).put("hello.txt" + i, i);
        }

        //        hashMap.forEach((k, v) -> System.out.println(k + " - " + v));

        // 2. HashMap可以使用null作为key，而 HashTable 则不允许null作为key

        // 3. HashMap的初始容量为16，HashTable初始容量为11，两者的填充因子默认都是0.75
    }

    @Test
    public void test() throws Exception {

        System.out.println(10 >> 2);
    }

    @Test
    public void tes2t() throws Exception {
        String i = Integer.toBinaryString(1 << 30);
        System.out.println(1 << 30);
        System.out.println(i);
    }

    @Test
    public void test2() throws Exception {

        // 二进制转换规则
        // 获得 十进制 46 二进制写法
        // 0010 1110
        // 8765 43210  2的n次幂
        // 256 128 64 32 16 8 4 2 1
        // ... 32*1=32 16*0=0  8*1=8 4*1=4 2*1=2 1*0=0
        // 32+8+4+2 = 46

        // 二进制加法 逢二进一

        int d = Integer.parseInt("00101110", 2);
        System.out.println("二进制转为十进制: " + d);

        // 负数
        // 1、 二进制位取反 1 换成 0 ; 0 换成 1
        // 2、 然后加 1
        // 因为计算机是64位的 所以前面的必须都换成 1 才行出来的结果才是对的
        // 这里简化处理了 没有写最高位的 1 所以结果是不对的
        int d2 = Integer.parseInt("11010010", 2);
        System.out.println("二进制转为十进制: " + d2);

        String d3 = Integer.toBinaryString(-46);
        System.out.println(d3);

    }

    @Test
    public void test3() throws Exception {
        int i = hash("hello.txt");
        System.out.println(i);
    }

    static final int hash(Object key) {
        //        int h ;
        //        return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);

        int h = key.hashCode();
        int c = h >>> 16;
        int d = h ^ c;
        System.out.println("hashcode: " + h + " >>>: " + c + " ^: " + d);
        return d;
    }
}
