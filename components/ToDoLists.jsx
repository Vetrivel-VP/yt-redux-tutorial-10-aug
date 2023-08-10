"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_LIST } from "@/context/actions/toDoActions";

const ToDoLists = () => {
  const todos = useSelector((state) => state.todos?.todos);
  return (
    <div className="w-full bg-zinc-800 my-4 rounded-lg px-4 py-3 flex flex-col items-center justify-center gap-2">
      {/* 
        -1  -> less
        1   -> greater than 
        0   - > equal
      */}
      <AnimatePresence>
        {todos?.length > 0 ? (
          <>
            {todos
              ?.slice()
              .sort((a, b) => b.id - a.id)
              .map((item) => (
                <ListCard key={item.id} index={item.id} item={item.item} />
              ))}
          </>
        ) : (
          <>
            <p>No Active Activities</p>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const ListCard = ({ index, item }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      className="w-full bg-black px-4 py-3 rounded-lg flex items-center justify-between"
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <p className="text-lg text-[#555] font-semibold">{item}</p>
      <motion.div
        onClick={() => dispatch(REMOVE_FROM_LIST(index))}
        className=" cursor-pointer"
        whileTap={{ scale: 0.9 }}
      >
        <MdDelete className="text-2xl text-red-500" />
      </motion.div>
    </motion.div>
  );
};

export default ToDoLists;
